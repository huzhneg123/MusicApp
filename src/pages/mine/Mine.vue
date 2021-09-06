<template>
  <section>
    <!-- 左侧按钮 -->
    <LeftNav></LeftNav>
    <!-- 头部组件 -->
    <HeaderTop class="h">
      <span class="nick" slot="s1">
        <img :src="userInfoList.avatarUrl?userInfoList.avatarUrl:''" />
        <span>{{userInfoList.avatarUrl?userInfoList.nickname:'未登录'}}</span>
      </span>
      <span class="right iconfont icon-sousuo" slot="s2"></span>
    </HeaderTop>
    <!-- 个人中心跳转 -->
    <div
      class="person"
      :class="userInfoList.avatarUrl?'person_xianshi':'person_yincang'"
      @click="$router.push('/userInfo')"
    >
      <img :src="userInfoList.avatarUrl?userInfoList.avatarUrl:''" />
      <a>
        <div class="mide">
          <div>{{userInfoList.nickname}}</div>
          <div>
            <span class="iconfont icon-VIP">开通</span>
            <span>lv3</span>
            <span class="iconfont icon-jiantou"></span>
          </div>
        </div>
      </a>
    </div>
    <div class="noLogin person" :class="userInfoList.avatarUrl?'person_yincang':'person_xianshi'">
      <router-link to="/login">
        <span class="iconfont icon-weidenglu"></span>
        <span>请先登陆</span>
      </router-link>
    </div>
    <!-- 杂烩 -->
    <div class="zahui">
      <div class="top">
        <a>
          <div>
            <span class="iconfont icon-xiazai1"></span>
            <i>本地/下载</i>
          </div>
        </a>
        <a>
          <div>
            <span class="iconfont icon-shangchuan"></span>
            <i>云盘</i>
          </div>
        </a>
        <a>
          <div>
            <span class="iconfont icon-gouwu"></span>
            <i>已购</i>
          </div>
        </a>
        <a>
          <div @click="$router.push('/recentlyPlay')">
            <span class="iconfont icon-bofang"></span>
            <i>最近播放</i>
          </div>
        </a>
      </div>
      <div class="botton top">
        <a>
          <div>
            <span class="iconfont icon-haoyou"></span>
            <i>我的好友</i>
          </div>
        </a>
        <a>
          <div>
            <span class="iconfont icon-shoucang"></span>
            <i>收藏和赞</i>
          </div>
        </a>
        <a>
          <div>
            <span class="iconfont icon-boke"></span>
            <i>我的播客</i>
          </div>
        </a>
        <a>
          <div>
            <span class="iconfont icon-bofang"></span>
            <i>音乐应用</i>
          </div>
        </a>
      </div>
    </div>
    <!--  广告 -->
    <a>
      <div class="guangao" :class="xiaoshi">
        <span>我是广告</span>
        <i class="iconfont icon-cha" @click="ni"></i>
      </div>
    </a>
    <!-- 我喜欢的音乐 -->
    <a>
      <div class="myLike" @click="$router.push('/myLikeMusic')">
        <div class="love">
          <img :src="item.coverImgUrl" v-for="item in userSongList" :key="item.id" />
          <!-- <i class="iconfont icon-xin"></i> -->
        </div>
        <p>我喜欢的音乐</p>
        <span>0首</span>
        <div class="xindong iconfont icon-xindong">心动模式</div>
      </div>
    </a>
    <!-- 小路由 -->
    <div class="song">
      <span :class="left" @click="cj">创建歌单</span>
      <span :class="right" @click="sc">收藏歌单</span>
    </div>
    <!-- 创建歌单 -->
    <div class="createSong">
      <div>创建共享歌单，和你的好友一起管理</div>
      <div>
        <span>创建歌单</span>
        <span class="iconfont icon-jia"></span>
        <span class="iconfont icon-dotdotdot"></span>
      </div>
      <div>
        <span class="iconfont icon-daoru1"></span>
        <span>一键导入外部音乐</span>
      </div>
    </div>
  </section>
</template>

<script>
import { getUserPrograms } from "../../api/user";
import { userSongList } from "../../api/axios";
import HeaderTop from "@/components/HeaderTop/HeaderTop";

import LeftNav from "@/components/LeftNav/LeftNav";

export default {
  data() {
    return {
      xiaoshi: "xianshi",
      left: "",
      right: "",
      userInfoList: {},
      userSongList: []
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
    // 用户电台
    let a = await getUserPrograms(this.userInfoList.userId);
    console.log(a);
  },
  components: {
    HeaderTop,
    LeftNav
  },

  methods: {
    ni() {
      this.xiaoshi = "yincang";
    },
    cj() {
      this.left = "xiahuaxian";
      this.right = "";
    },
    sc() {
      this.right = "xiahuaxian";
      this.left = "";
    }
  }
};
</script>

<style scoped>
/* 个人中心的隐藏与显示 */

.person_xianshi {
  display: block;
}
.person_yincang {
  display: none;
}

.h {
  background-color: #ffffff;
}
.nick {
  position: absolute;
  height: 28px;
  left: 90px;
  right: 90px;
  margin-top: 15px;
  display: flex;
  line-height: 28px;
  justify-content: center;
}
.nick img {
  height: 100%;
  width: 30px;
  border-radius: 15px;
}
.nick span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-left: 6px;
  width: 90px;
}
/* 个人中心跳转区 */

.noLogin span:nth-child(1) {
  display: inline-block;
  font-size: 50px;
  padding-top: 20px;
  padding-left: 20px;
}
.noLogin span:nth-child(2) {
  position: absolute;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 35px;
}

.person {
  height: 80px;
  width: 100%;
  /* position: relative; */
}
.person img {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-top: 10px;
  margin-left: 30px;
  position: absolute;
}
.mide {
  position: absolute;
  height: 60px;
  width: 260px;
  margin-left: 100px;
  margin-top: 60px;
  margin-left: 110px;

  top: 10px;
}
.mide div:nth-child(1) {
  margin-top: 10px;
}
.mide div:nth-child(2) {
  margin-top: 5px;
}
.mide div:nth-child(2) span:nth-child(1) {
  color: #ffffff;
  display: inline-block;
  font-size: 11px;
  height: 15px;
  width: 50px;
  text-align: center;
  line-height: 15px;
  background-color: rgb(172, 172, 172);
  border-radius: 7px;
}
.mide div:nth-child(2) span:nth-child(2) {
  display: inline-block;
  font-size: 11px;
  height: 15px;
  width: 35px;
  text-align: center;
  line-height: 15px;
  background-color: #ffffff;
  border-radius: 7px;
  margin-left: 5px;
}
.icon-jiantou {
  position: absolute;
  right: 5px;
  margin-top: -6px;
}
/*杂烩 */
.zahui {
  height: 150px;
  width: 92%;
  background-color: #ffffff;
  margin-left: 4%;
  margin-top: 8px;
  border-radius: 5px;
}
.zahui .top div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 70px;
  margin-left: 5px;
}
.top {
  display: flex;
}
.top div span {
  text-align: center;
  height: 25px;
  width: 30px;
  /* border: 3px solid #696666; */
  border-radius: 5px;
  display: inline-block;
  margin-top: 15px;
  color: #f8f5f5;
  font-weight: 800;
  line-height: 25px;
  background-color: rgb(209, 56, 29);
}
.top div i {
  font-size: 13px;
  margin-top: 5px;
}
.botton {
  margin-top: 40px;
}
.guangao {
  position: relative;
  width: 92%;
  margin-left: 4%;
  height: 30px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: 0.3px solid rgb(207, 205, 205);
  background-color: #ffffff;
}
.xianshi {
  display: block;
}
.yincang {
  display: none;
}
.guangao span {
  line-height: 30px;
  margin-left: 20px;
}

.icon-cha {
  position: absolute;
  left: 300px;
  line-height: 30px;
}
/* 我喜欢的音乐 */
.myLike {
  height: 100px;
  width: 92%;
  margin-left: 4%;
  background-color: #ffffff;
  margin-top: 20px;
  border-radius: 5px;
}
.love {
  height: 50px;
  width: 50px;
  background-color: rgb(177, 167, 167);
  border-radius: 5px;
  position: absolute;
  margin-top: 25px;
  margin-left: 15px;
}
.love img {
  height: 100%;
  width: 100%;
}
.icon-xin {
  width: 20px;
  color: #ffffff;
  line-height: 50px;
  margin-left: 13px;
  font-size: 25px;
}
.myLike p {
  margin-left: 80px;
  padding-top: 30px;
  font-size: 15px;
}
.myLike span {
  font-size: 12px;
  margin-left: 80px;
  color: rgb(177, 168, 168);
}

.xindong {
  position: absolute;
  color: rgb(224, 89, 89);
  display: inline-block;
  font-size: 11px;
  height: 16px;
  width: 80px;
  text-align: center;
  line-height: 16px;
  border-radius: 10px;
  border: 1px solid rgb(177, 168, 168);
  margin-left: 150px;
}
/* 歌单路由 */
.song {
  height: 60px;
  width: 100%;
  /* background-color: red; */
}
.song span {
  display: inline-block;
  font-size: 20px;
  margin-left: 65px;
  padding-top: 20px;
}
.xiahuaxian {
  border-bottom: 4px solid red;
}
.createSong {
  height: 170px;
  width: 92%;
  margin-left: 4%;
  border-radius: 5px;
  background-color: #ffffff;
}
.createSong div:nth-child(1) {
  font-size: 13px;
  text-align: center;
  height: 30px;
  width: 100%;
  background-color: rgba(235, 152, 44, 0.2);
  line-height: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: orange;
}
.createSong div:nth-child(2) {
  margin-top: 10px;
  height: 20px;
  width: 100%;
}
.createSong div:nth-child(2) span:nth-child(1) {
  padding-left: 20px;
  color: rgb(128, 131, 130);
  font-size: 12px;
}
.createSong div:nth-child(2) span:nth-child(2) {
  position: absolute;
  color: rgb(62, 65, 64);
  font-size: 24px;
  line-height: 20px;

  right: 55px;
}
.createSong div:nth-child(2) span:nth-child(3) {
  position: absolute;
  line-height: 20px;
  color: rgb(128, 131, 130);
  right: 20px;
  font-size: 18px;
}
.icon-daoru1 {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(161, 160, 159, 0.2);

  font-size: 26px;
  line-height: 40px;
  margin-left: 20px;
  padding-left: 8px;
  box-sizing: border-box;
  border-radius: 5px;
}
.createSong div:nth-child(3) {
  margin-top: 10px;
}
.createSong div:nth-child(3) span:nth-child(2) {
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
  font-size: 13px;
}
</style>                                                     