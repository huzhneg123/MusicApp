<template>
  <div class="typePage">
    <ul>
      <li v-for="item in getDjTypeList" :key="item.id" @click="topath(item.id)">
        <img :src="item.pic56x56Url" />
        <h2>{{item.name}}</h2>
      </li>
    </ul>
    <!-- 情感 -->
    <div class="typeTuijian_body">
      <div class="typeTuijian_body_header">
        <span>情感</span>
        <span>更多</span>
      </div>
      <div class="typeTuijian_body_img">
        <span v-for="(item,index) in qingGanList" :key="item.id" @click="selectItem(item,index)">
          <img :src="item.blurCoverUrl" />
          <h2>{{item.description}}</h2>
        </span>
      </div>
    </div>
    <!-- 音乐推荐 -->
    <div class="typeTuijian_body">
      <div class="typeTuijian_body_header">
        <span>音乐推荐</span>
        <span>更多</span>
      </div>
      <div class="typeTuijian_body_img">
        <span
          v-for="(item,index) in musicTuiJianList"
          :key="item.id"
          @click="selectItem2(item,index)"
        >
          <img :src="item.blurCoverUrl" />
          <h2>{{item.description}}</h2>
        </span>
      </div>
    </div>
    <!-- 二次元 -->
    <div class="typeTuijian_body">
      <div class="typeTuijian_body_header">
        <span>二次元</span>
        <span>更多</span>
      </div>
      <div class="typeTuijian_body_img">
        <span v-for="(item,index) in eCiYuanList" :key="item.id" @click="selectItem3(item,index)">
          <img :src="item.blurCoverUrl" />
          <h2>{{item.description}}</h2>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// 音乐推荐节目
import { getDjPrograms } from "../../api/axios";
import { getDjType } from "../../api/axios";

export default {
  data() {
    return {
      getDjTypeList: [],
      musicTuiJianList: [],
      qingGanList: [],
      eCiYuanList: []
    };
  },
  async mounted() {
    let getDjTypeData = await getDjType();
    this.getDjTypeList = getDjTypeData.categories.splice(0, 12);
    // 音乐推荐节目
    let musicTuiJianData = await getDjPrograms(45, 6);
    this.musicTuiJianList = musicTuiJianData.programs;
    // 情感
    let qingGanData = await getDjPrograms(958007276, 6);
    this.qingGanList = qingGanData.programs;
    // 二次元
    let erCiYuanData = await getDjPrograms(350446056, 6);
    this.eCiYuanList = erCiYuanData.programs;
  },
  methods: {
    topath(item) {
      this.$router.push({
        path: "/typeTuijian",
        query: {
          typeId: JSON.stringify(item)
        }
      });
    },
    selectItem(item, index) {
      this.selectPlay({
        list: this.qingGanList,
        index
      });
    },
    selectItem2(item, index) {
      this.selectPlay({
        list: this.musicTuiJianList,
        index
      });
    },
    selectItem3(item, index) {
      this.selectPlay({
        list: this.eCiYuanList,
        index
      });
    },
    ...mapActions(["selectPlay"])
  },
  components: {}
};
</script>

<style scoped>
.typePage ul {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: -25px;
}
.typePage ul li {
  width: 80px;
  text-align: center;
  margin-top: 30px;
}
.typePage ul li img {
  height: 35px;
  /* background: -webkit-linear-gradient(left, #fa5a55, #fa994d); */
}
.typePage ul li h2 {
  margin-top: 3px;
  font-size: 13px;
}
/* 音乐推荐 */
.typeTuijian_body {
  height: 300px;
  width: 100%;
  margin-top: 25px;
}
.typeTuijian_body_header {
  height: 30px;
}
.typeTuijian_body_header span:nth-child(1) {
  display: inline-block;
  margin-top: 12px;
  margin-left: 25px;
}
.typeTuijian_body_header span:nth-child(2) {
  position: absolute;
  right: 0;
  margin-right: 25px;
  height: 15px;
  width: 40px;
  /*  */
  border: 1px solid rgb(90, 88, 88);
  font-size: 12px;
  border-radius: 10px;
  line-height: 15px;
  text-align: center;
  margin-top: 12px;
}
.typeTuijian_body_img {
  margin-top: 10px;
  width: 92%;
  height: 250px;
  margin-left: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.typeTuijian_body_img span {
  margin-bottom: 30px;
}

.typeTuijian_body_img span img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.typeTuijian_body_img span h2 {
  font-size: 12px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content {
  /* height: calc(100%-35px); */
  /* height: 700px;
  overflow: hidden; */
  position: absolute;
  top: 45px;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>