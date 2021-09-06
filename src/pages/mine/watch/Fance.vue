<template>
  <div>
    <ul class="watch_list">
      <li v-for="(item,index) in getUserFanceList" :key="index">
        <img :src="item.avatarUrl" />
        <span>{{item.nickname}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserFance } from "../../../api/axios";

export default {
  data() {
    return {
      userInfoList: [],
      getUserFanceList: []
    };
  },
  async mounted() {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfoList = JSON.parse(userInfo);
    }
    let getUserFanceData = await getUserFance(this.userInfoList.userId);
    this.getUserFanceList = getUserFanceData.followeds;
  }
};
</script>

<style >
.watch_list {
  margin-top: 30px;
}
.watch_list li {
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
}
.watch_list li img {
  vertical-align: middle;

  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.watch_list li span {
  margin-left: 15px;
  font-size: 15px;
}
</style>