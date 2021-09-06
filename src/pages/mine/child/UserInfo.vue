<template>
  <div class="userInfo">
    <div class="typeTuijian_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span>{{userInfoList.nickname}}</span>
    </div>
    <div class="typeTuijian_header_zhan"></div>

    <div class="userInfo_body">
      <img :src="userInfoList.avatarUrl" />
      <div class="userInfo_info">
        <span>
          <h5 @click="$router.push('/watch/fance')">{{getUserFanceCur}}</h5>
          <h5>粉丝</h5>
        </span>

        <span @click="$router.push('/watch')">
          <h5>{{watchCur}}</h5>
          <h5>关注</h5>
        </span>
        <span>
          <h5>1</h5>
          <h5>等级</h5>
        </span>
      </div>
      <div class="userInfo_bianji">编辑信息</div>
    </div>
  </div>
</template>

<script>
import { getUserFance } from "../../../api/axios";
import { getUserWatch } from "../../../api/axios";
export default {
  data() {
    return {
      // 用户i信息
      userInfoList: [],
      //   关注数
      watchCur: "",
      // fensishu
      getUserFanceCur: ""
    };
  },
  async mounted() {
    // 读取本地
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      // 反编译json
      this.userInfoList = JSON.parse(userInfo);
    }
    let getUserWatchData = await getUserWatch(this.userInfoList.userId);
    this.watchCur = getUserWatchData.follow.length;

    let getUserFanceData = await getUserFance(this.userInfoList.userId);
    this.getUserFanceCur = getUserFanceData.followeds.length;
  }
};
</script>

<style scoped>
.typeTuijian_header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  background-color: #ffffff;
  z-index: 2;
}
.typeTuijian_header_zhan {
  height: 50px;
}
.typeTuijian_header span:nth-child(1) {
  font-size: 25px;
  margin-left: 15px;
  left: 0;
  position: absolute;
}
.typeTuijian_header span:nth-child(2) {
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  /* font-size: 17px; */
  position: absolute;
}
/* -- */
.userInfo {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
.userInfo img {
  width: 100%;
  height: 200px;
}
.userInfo_body {
  margin-top: 10px;
  height: 80px;
  width: 100%;
}
.userInfo_body img {
  height: 100%;
  width: 80px;
  margin-left: 20px;
  border-radius: 40px;
  float: left;
}
.userInfo_info {
  height: 50%;
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
}
.userInfo_info span {
  text-align: center;
}
.userInfo_info span h5:nth-child(2) {
  font-size: 12px;
  color: rgb(157, 162, 162);
}
.userInfo_bianji {
  float: left;
  text-align: center;
  width: 90px;
  margin-left: 90px;
  margin-top: 12px;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  border: 1px solid rgb(157, 162, 162);
}
</style>