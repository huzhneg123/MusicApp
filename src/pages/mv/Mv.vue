<template>
  <div class="mv">
    <div class="mv_header">
      <span class="iconfont icon-ai-arrow-down" @click="$router.back()"></span>
      <span>mv</span>
      <span class="iconfont icon-tubiao-20"></span>
    </div>
    <video
      class="mv_video"
      :src="getMvUrllist"
      autoplay
      ref="mv"
      @click="dianJi"
      @timeupdate="updateTime"
    ></video>
    <div class="sanjiao" :class="sanjiaoNone"></div>
    <div class="mv_fenxiang">
      <span>
        <i class="iconfont icon-dianzan"></i>
        <h5>{{getZan}}</h5>
      </span>
      <span @click="blok">
        <i class="iconfont icon-xiaoxi"></i>
        <h5>{{getSub}}</h5>
      </span>
      <span>
        <i class="iconfont icon-zhuanfa"></i>
        <h5>{{getShare}}</h5>
      </span>
      <span>
        <i class="iconfont icon-shoucang1"></i>
        <h5>收藏</h5>
      </span>
    </div>
    <div class="mv_avator">
      <img :src="getMvImg" />
      <span>
        {{getArtistName}}
        <span class="iconfont icon-jia1"></span>
      </span>
      <div class="title">{{getMvName}}</div>
      <div class="see">{{getplay}}次观看</div>
    </div>
    <!-- 音乐进度条 -->
    <div class="fatherBar">
      <i class="time_progressBar" ref="bar" :style="{width: barWith+'px'}"></i>
    </div>
    <!-- 底部 -->
    <div class="mv_footer">
      <span class="iconfont icon-icon_fuben"></span>
      <span class="gun">
        <span class="gunnei">
          <p>{{getMvName}}</p>
        </span>
      </span>
    </div>
    <!-- mv评论 -->

    <div class="playMusic_commons" :class="com">
      <div class="playMusic_commons_header">
        <i class="iconfont icon-zuo" @click="none"></i>
        <i>评论(51555)</i>
      </div>
      <div class="playMusic_commons_flexd"></div>
      <div class="playMusic_commons_gundong">
        <div
          class="playMusic_commons_songInfo_f"
          v-for="item in getMvCommentsList"
          :key="item.commentId"
        >
          <img :src="item.user.avatarUrl" />
          <span class="playMusic_commons_songInfo_name">{{item.user.nickname}}</span>
          <p class="playMusic_commons_songInfo_nav">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入动画库
import "animate.css";
import { getMvUrl } from "../../api/axios";
// mv数据
import { getMvInfo } from "../../api/axios";
// mv点赞等数据
import { getMvZan } from "../../api/axios";
// mv评论
import { getMvComments } from "../../api/axios";
export default {
  data() {
    return {
      mvId: this.$route.query.mvId,
      // mv地址
      getMvUrllist: "",
      // 作者名字
      getArtistName: "",
      // mv名字
      getMvName: "",
      getMvImg: "",
      // 播放数
      getplay: "",
      // 点赞数
      getZan: "",
      // 分享数
      getShare: "",
      // 评论数
      getSub: "",
      isplay: true,
      sanjiaoNone: "sanjiao_none",
      mvDuration: "",
      barWith: "",
      com: "song_word_none",
      getMvCommentsList: []
    };
  },
  async mounted() {
    let getMvUrlData = await getMvUrl(this.mvId);
    this.getMvUrllist = getMvUrlData.data.url;

    let getMvInfoData = await getMvInfo(this.mvId);
    this.getArtistName = getMvInfoData.data.artistName;
    this.getMvName = getMvInfoData.data.name;
    this.getMvImg = getMvInfoData.data.cover;

    // 获取mv总时长
    let mvduration = getMvInfoData.data.duration;
    this.mvDuration = mvduration / 1000;

    let getMvZanData = await getMvZan(this.mvId);
    this.getplay = getMvZanData.data.playCount;
    this.getShare = getMvZanData.data.shareCount;
    this.getZan = getMvZanData.data.likeCount;
    this.getSub = getMvZanData.data.subCount;

    // mv评论
    let getMvCommentsData = await getMvComments(this.mvId);
    this.getMvCommentsList = getMvCommentsData.comments;
  },
  methods: {
    updateTime(e) {
      let timeNow = e.target.currentTime;
      this.barWith = (timeNow / this.mvDuration) * 360;
    },
    dianJi() {
      this.isplay = !this.isplay;
      if (this.isplay === false) {
        this.$refs.mv.pause();
        this.sanjiaoNone = "sanjiao";
      } else {
        this.$refs.mv.play();
        this.sanjiaoNone = "sanjiao_none";
      }
    },
    blok() {
      this.com = "playMusic_commons";
    },
    none() {
      this.com = "song_word_none";
    }
  }
};
</script>

<style>
.mv {
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 10;
}
.song_word_none {
  display: none;
}
.mv_header {
  height: 35px;
  width: 100%;
}
.mv_header span:nth-child(1) {
  font-size: 20px;
  position: absolute;
  left: 0;
  margin-left: 10px;
  line-height: 35px;
  color: #ffffff;
}
.mv_header span:nth-child(2) {
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-align: center;
  height: 25px;
  width: 35px;
  background-color: rgba(248, 246, 246, 0.2);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
  border-radius: 10px;
}
.mv_header span:nth-child(3) {
  color: #ffffff;

  line-height: 35px;

  font-size: 22px;
  position: absolute;
  right: 0;
  margin-right: 10px;
}
.mv_video {
  height: 190px;
  width: 94%;
  margin-top: 120px;
  margin-left: 3%;
}
.mv_fenxiang {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 30px;
  right: 0;
  margin-right: 15px;
  margin-top: 25px;
}
.mv_fenxiang span {
  margin-top: 15px;
  height: 40px;
  width: 100%;
}
.mv_fenxiang span i {
  color: #ffffff;

  font-size: 28px;
}

.mv_fenxiang span h5 {
  margin-top: 2px;
  color: #ffffff;
  text-align: center;
  font-size: 11px;
}
.mv_avator {
  padding-left: 10px;
  margin-top: 170px;
  height: 40px;
}

.mv_avator img {
  width: 40px;
  height: 100%;
  border-radius: 20px;
}
.mv_avator span {
  margin-left: 7px;
  color: #ffffff;
  width: 250px;
  position: absolute;
  line-height: 40px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mv_avator .icon-jia1 {
  margin-left: 7px;
  height: 18px;
  background-color: red;
  width: 23px;
  font-size: 12px;
  line-height: 18px;
  margin-top: 11px;
  text-align: center;
  border-radius: 7px;
}
.title {
  margin-top: 7px;
  font-size: 13px;
  color: #ffffff;
  height: 20px;
  width: 200px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.see {
  margin-top: 7px;
  font-size: 12px;
  color: #9b9292;
  height: 20px;
  width: 100px;
}
.sanjiao {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-left: 40px solid rgba(216, 213, 213, 0.5);
  border-bottom: 20px solid transparent;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -120px;
}
.sanjiao_none {
  display: none;
}

.fatherBar {
  /* position: absolute; */
  width: 360px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
}
.time_progressBar {
  position: absolute;
  height: 2px;
  width: 150px;
  background-color: rgba(255, 255, 255, 0.5);
}
.mv_footer {
  height: 30px;
  width: 100%;
  margin-top: 10px;
  line-height: 30px;
}
.mv_footer span {
  font-size: 27px;
  margin-left: 7px;
  color: #cec6c6;
}
.gun {
  position: absolute;
  width: 150px;
  height: 30px;
  overflow: hidden;
}
.gunnei {
  position: absolute;
  width: 200px;
  height: 30px;
  animation: gun 2s linear infinite;
}
.gunnei p {
  position: absolute;
  font-size: 12px;
}
.gunnei p:nth-child(1) {
  left: 0;
  width: 50%;
  margin-right: 35px;
}
.gunnei p:nth-child(2) {
  left: 50%;
  width: 50%;
}
@keyframes gun {
  0% {
  }
  100% {
    transform: translateX(-60%);
  }
}
.playMusic_commons {
  /* z-index: 10; */
  position: absolute;
  width: 100%;
  height: 330px;
  background-color: #ffffff;
  bottom: 0;
  transition: all 0.4s;
}
.playMusic_commons_header {
  z-index: 2;
  /* background-color: #ffffff; */
  position: fixed;
  line-height: 50px;
  height: 50px;
  width: 100%;
}
.playMusic_commons_header i {
  margin-left: 15px;
  position: absolute;
  font-size: 25px;
}
.playMusic_commons_header i:nth-child(2) {
  position: absolute;
  font-size: 19px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.playMusic_commons_flexd {
  height: 50px;
  width: 100%;
}
.playMusic_commons_songInfo-f {
  margin-bottom: 50px;
  height: 40px;
  width: 100%;
  /* background-color: #ffffff; */
}
.playMusic_commons_songInfo img {
  margin-left: 15px;
  height: 35px;
  width: 35px;
  border-radius: 18px;
  vertical-align: middle;
}
/* 过渡 */
.mvTran-enter {
  transform: translateX(-100%);
}
.mvTran-enter-to {
  transform: translateX(0);
}
.playMusic_commons_songInfo_name {
  font-size: 15px;
  margin-left: 10px;
}
.playMusic_commons_songInfo_nav {
  margin-left: 16%;
  width: 80%;
  font-size: 13px;
}
.playMusic_commons_gundong {
  height: 270px;
  overflow-y: scroll;
}
.playMusic_commons_gundong::-webkit-scrollbar {
  width: 0 !important;
}
</style>