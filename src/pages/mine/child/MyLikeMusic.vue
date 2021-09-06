<template>
  <div class="playlist">
    <ChildpageHeader title="歌单" class="playlist_header" />
    <div class="platlist_body">
      <img :src="item.coverImgUrl" v-for="item in userSongList" :key="item.id" />
      <div class="platlist_body_playCount">
        <span class="iconfont icon-bofang101"></span>
        <span>{{userSongPlayCount}}</span>
      </div>
      <span class="playlist_person">
        <h5>我喜欢的音乐</h5>
        <div class="playlist_avator">
          <img :src="userInfoList.avatarUrl" />
          <span>{{userInfoList.nickname}}</span>
        </div>
      </span>
    </div>
    <div class="fenxiang">
      <span>
        <i class="iconfont icon-shoucang1"></i>
        收藏
      </span>
      <span>
        <i class="iconfont icon-xiaoxi"></i>评论
      </span>
      <span>
        <i class="iconfont icon-fenxiang1"></i>
        分享
      </span>
    </div>
  </div>
</template>

<script>
import { getUserSongList } from "../../../api/user";

import { userSongList } from "../../../api/axios";
import ChildpageHeader from "../../../components/childPageHeader/ChildpageHeader";
export default {
  data() {
    return {
      userInfoList: {},

      userSongList: [],
      userSongPlayCount: ""
    };
  },
  async mounted() {
    // 读取本地
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      // 反编译json
      this.userInfoList = JSON.parse(userInfo);
    }

    // 我喜欢的音乐
    let userSongData = await userSongList(this.userInfoList.userId);
    this.userSongList = userSongData.playlist;

    // 用户歌单
    let getUserSongData = await getUserSongList(this.userInfoList.userId);
    this.userSongPlayCount = getUserSongData.playlist[0].playCount;
  },
  components: {
    ChildpageHeader
  }
};
</script>

<style scoped>
.playlist {
  background-color: #ffffff;
  height: 100%;
}
.playlist_header {
  background-color: rgba(0, 0, 0, 0.6);
}

.platlist_body {
  width: 100%;
  height: 200px;
  position: relative;
  /* z-index: 0; */
  overflow: hidden;
}

.platlist_body::after {
  z-index: 0;
  content: "";
  width: 180%;
  height: 200px;
  position: absolute;
  left: -40%;
  top: 0;
  border-radius: 0 0 50% 50%;
  background-color: rgba(0, 0, 0, 0.6);
  /* background-color: red; */
}

.platlist_body img {
  z-index: 1;
  position: absolute;

  height: 130px;
  width: 130px;
  margin-left: 10px;
  margin-top: 10px;
  float: left;
  border-radius: 10px;
}
.playlist_person {
  display: inline-block;
  margin-left: 20px;
  position: absolute;
  z-index: 2;
}
.playlist_person h5 {
  font-size: 18px;
  color: #f7f5f5;
  letter-spacing: 3px;
  margin-left: 130px;

  margin-top: 10px;
}
.playlist_avator {
  margin-top: 5px;
  margin-left: 130px;
}
.playlist_avator img {
  margin-left: 0px;
  width: 25px;
  height: 25px;
  border-radius: 20px;
}
.playlist_avator span {
  display: inline-block;
  margin-left: 30px;
  margin-top: 15px;
  font-size: 12px;
  color: rgb(201, 189, 189);
}
.fenxiang {
  display: flex;
  justify-content: space-around;
  height: 35px;
  width: 80%;
  border-radius: 20px;
  background-color: rgb(245, 238, 238);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -30px;
}
.fenxiang span {
  height: 20px;
  line-height: 20px;
  width: 100px;
  border-right: 1px solid rgb(185, 181, 181);
  text-align: center;
  margin-top: 8px;
}

.fenxiang span:nth-child(3) {
  border-right: 0;
}
.fenxiang .icon-xiaoxi {
  font-size: 19px;
  margin-right: 3px;
}
.platlist_body_playCount {
  height: 15px;
  width: 30px;
  background-color: rgb(131, 97, 162);
  position: absolute;
  z-index: 1;
  margin-left: 106px;
  margin-top: 15px;
  border-radius: 10px;
}
.platlist_body_playCount .icon-bofang101 {
  color: #ffffff;
  font-size: 12px;
  position: absolute;
  margin-top: 1px;
  margin-left: 12px;
}
.platlist_body_playCount span:nth-child(2) {
  color: #ffffff;
  font-size: 12px;
  position: absolute;
  margin-left: 18px;
  margin-top: 1px;
}
</style>