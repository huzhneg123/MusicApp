<template>
  <div class="w">
    <div class="fand_header">
      <div class="left iconfont icon-nav"></div>
      <a>
        <div class="middle" @click="$router.push('/search')">
          <span class="iconfont icon-icon-system-search"></span>
          <span>大家都在听 声控助眠</span>
        </div>
      </a>

      <span class="right iconfont icon-maikefeng"></span>
    </div>
    <div class="fand_header_zhan"></div>

    <LeftNav></LeftNav>
    <Scroll class="content">
      <!-- 推荐新音乐 -->
      <div class="newMusci">
        <div class="newMusci_header">
          <span>推荐新音乐</span>
          <span>更多></span>
        </div>
        <div class="newMusic_lunbo">
          <span v-for="(item,index) in newMusicList" :key="index" @click="toPath(item.id,index) ">
            <img :src="item.picUrl" />
            <p>{{item.name}}</p>
          </span>
        </div>
      </div>
      <!-- 推荐MV -->
      <div class="newMusci">
        <div class="newMusci_header">
          <span>最近热门mv推荐</span>
          <span @click="$router.push('/allMv')">更多></span>
        </div>
        <div class="newMusic_lunbo">
          <span v-for="(item,index) in tuiJianMVList" :key="index" @click="toPath2(item.id,index) ">
            <img :src="item.picUrl" />
            <p>{{item.name}}</p>
          </span>
        </div>
      </div>
      <!-- 推荐电台 -->

      <div class="newMusci">
        <div class="newMusci_header">
          <span>推荐电台</span>
          <span>更多></span>
        </div>
        <div class="newMusic_lunbo">
          <span v-for="item in tuiJianShowList" :key="item.id">
            <img :src="item.picUrl" />
            <p>{{item.name}}</p>
          </span>
        </div>
      </div>

      <div class="newMusci">
        <div class="newMusci_header">
          <span>推荐节目</span>
          <span>更多></span>
        </div>
        <div class="newMusic_lunbo">
          <span v-for="item in tuiJanRadioList" :key="item.id">
            <img :src="item.coverUrl" />
            <p>{{item.name}}</p>
          </span>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "../../common/Scroll";
import ajax from "@/api/ajax";
import LeftNav from "@/components/LeftNav/LeftNav";
import { newMusic } from "../../api/axios";

export default {
  data() {
    return {
      // 推荐新音乐
      newMusicList: [],
      // 推荐MV
      tuiJianMVList: [],
      // 推荐电台
      tuiJianShowList: [],
      // 推荐节目
      tuiJanRadioList: [],
      index: 0
    };
  },
  methods: {
    // 路由跳转
    toPath(item, index) {
      this.$router.push({
        path: "/music",
        query: {
          songId: item,
          index: index
        }
      });
      this.index = index;
    },
    toPath2(item, index) {
      this.$router.push({
        path: "/mv",
        query: {
          mvId: item,
          index: index
        }
      });
    }
  },
  async mounted() {
    // 推荐新音乐
    let newData = await newMusic();
    this.newMusicList = newData.result.splice(0, 15);

    // 推荐mv
    let tuiJanMV = await ajax("http://localhost:3000/personalized/mv");
    this.tuiJianMVList = tuiJanMV.result;
    // 推荐电台
    let tuiJanShow = await ajax("http://localhost:3000/personalized/djprogram");
    this.tuiJianShowList = tuiJanShow.result;

    // 推荐节目
    let tuiJanRadio = await ajax("http://localhost:3000/program/recommend");
    this.tuiJanRadioList = tuiJanRadio.programs.splice(0, 10);

    // 订阅消息
    this.$bus.$on("changeSong", data => {
      if (data === "上一首") {
        if (this.index === 0) {
          this.index = this.newMusicList.length;
        }
        this.index = this.index - 1;
      }
      if (data === "下一首") {
        if (this.index === this.newMusicList.length - 1) {
          this.index = -1;
        }
        this.index = this.index + 1;
      }
      let musicId = this.newMusicList[this.index].id;
      this.$bus.$emit("musicId", musicId);

      // console.log(musicId);
    });
  },
  components: {
    // HeaderTop,
    LeftNav,
    Scroll
  }
};
</script>

<style >
.w {
  overflow: hidden;
  height: 800px;
  background-color: #ffffff;
}
.newMusci {
  height: 150px;
  width: 100%;
}
.newMusci_header {
  margin-top: 10px;
  height: 30px;
  width: 100%;
}
.newMusci_header span:nth-child(1) {
  font-size: 17px;
  line-height: 30px;
  margin-left: 17px;
}
.newMusci_header span:nth-child(2) {
  margin-top: 6px;
  position: absolute;
  border: 1px solid rgb(90, 88, 88);
  right: 17px;
  font-size: 12px;
  height: 15px;
  width: 40px;
  line-height: 15px;
  border-radius: 10px;
  text-align: center;
}
.newMusic_lunbo {
  padding-top: 10px;
  height: 120px;
  /* display: flex; */
}
.newMusic_lunbo span img {
  margin-left: 17px;
  margin-right: 6px;
  height: 80%;
  width: 100px;
  border-radius: 15px;
}
.newMusic_lunbo span p {
  margin-left: 18px;

  font-size: 12px;
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 移动端横向滚动条 */
.newMusic_lunbo {
  width: 100%;
  height: 120px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #ffffff;
}
.newMusic_lunbo::-webkit-scrollbar {
  display: none;
}
.content {
  height: 500px;
}
</style>