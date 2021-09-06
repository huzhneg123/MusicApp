<template>
  <div class="recently">
    <ChildpageHeader title="最近播放" />

    <!-- <div class="recently_header">
      <span class="iconfont icon-cha" @click="$router.back()"></span>
      最近播放
    </div>-->
    <div class="recently_title">
      <span>歌曲</span>
      <span>视频</span>
    </div>
    <div
      class="recently_list"
      v-for="(item,index) in userRecentlyList"
      :key="index"
      @click="toPath(item.song.id,index) "
      v-show="userRecentlyList.length!==0"
    >
      <img :src="item.song.al.picUrl" />
      <span>
        <h5 class="ellipsis">{{item.song.name}}</h5>
        <h5>{{item.song.ar[0].name}}</h5>
      </span>
    </div>

    <div v-show="userRecentlyList.length===0" class="playJilu">暂无播放记录!</div>
  </div>
</template>

<script>
import ChildpageHeader from "../../../components/childPageHeader/ChildpageHeader";
import { userSonged } from "../../../api/axios";

export default {
  data() {
    return {
      // 用户最近播放记录
      userRecentlyList: [],
      //   本地用户信息
      userInfoList: {}
    };
  },
  async mounted() {
    // 读取本地
    let Recently = localStorage.getItem("userInfo");
    if (Recently) {
      // 反编译json
      this.userInfoList = JSON.parse(Recently);
    }
    // 所有榜单内容
    let userRecentlyData = await userSonged(this.userInfoList.userId);
    this.userRecentlyList = userRecentlyData.weekData;
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
    }
  },
  components: {
    ChildpageHeader
  }
};
</script>

<style scoped>
.recently {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
}
.recently_header {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
}

.recently_header .icon-cha {
  position: absolute;
  left: 0;
  margin-left: 10px;
}
.recently_title span {
  margin-right: 49px;
}
.recently_title {
  margin-left: 10px;
  height: 30px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #ffffff;
  line-height: 30px;
}
.recently_title::-webkit-scrollbar {
  display: none;
}

.recently_list {
  margin-top: 10px;
  height: 90px;
  width: 100%;
}
.recently_list img {
  float: left;
  width: 100px;
  height: 100%;
  margin-left: 10px;
  border-radius: 10px;
}
.recently_list span {
  display: inline-block;
  margin-left: 10px;
}
.recently_list span h5:nth-child(1) {
  margin-top: 20px;
  font-size: 16px;
}
.recently_list span h5:nth-child(2) {
  font-size: 12px;
  color: rgb(109, 108, 106);
}
.playJilu {
  text-align: center;
  margin-top: 50px;
}
</style>