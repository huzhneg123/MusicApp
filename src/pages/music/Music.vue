<template>
  <div class="playMusic">
    <div class="playMusic_header">
      <span class="iconfont icon-ai-arrow-down" @click="$router.back()"></span>
      <span v-for="item in getMusicInfoList" :key="item.id">
        {{item.name}}
        <div>{{item.ar[0].name}}</div>
      </span>
      <span class="iconfont icon-fenxiang1"></span>
    </div>
    <div class="playMusic_circle">
      <div class="playMusic_circle_black">
        <img
          class="disc"
          :class="isplay?'animation':''"
          :src="item.al.picUrl"
          v-for="item in getMusicInfoList"
          :key="item.id"
          @click="isword"
        />
      </div>
    </div>
    <!-- 歌词 -->
    <div class="song_word" :class="c" @click="isword2">
      <div class="song_word_height">
        <!-- v-for="(item, index) in lyricsObjArr" :key="index" -->
        <!-- {{item.lyric}} -->
        <h5>歌词</h5>
        <h5>歌词</h5>
        <h5>歌词</h5>
        <h5>歌词</h5>
        <h5>歌词</h5>
      </div>
    </div>
    <!-- 音频 -->
    <audio
      ref="audioDom"
      @timeupdate="updateTime"
      autoplay="autoplay"
      :src="item.url"
      v-for="item in getMusicUrl"
      :key="item.id"
    ></audio>

    <div class="playMusic_foot">
      <span class="iconfont icon-icon-"></span>
      <span class="iconfont icon-zuobofang" @click="leftSong"></span>
      <span
        class="iconfont icon-bofang2"
        :class="isplay?'icon-iconfront-':''"
        @click="controlMusic"
      ></span>
      <span class="iconfont icon-youbofang" @click="rightSong"></span>
      <span class="iconfont icon-liebiao-xiantiao"></span>
    </div>
    <!-- 音乐进度条 -->
    <div class="progressBar">
      <span id="demo">{{currentTime}}</span>
      <span ref="fatherBar">
        <i class="time_progressBar" ref="bar" :style="{width: currentWidth+'px'}">
          <i class="time_progressBar_circle"></i>
        </i>
      </span>
      <span>{{getMusicTime}}</span>
    </div>
    <!-- 评论区域 -->
    <div class="playMusic_recom">
      <span class="iconfont icon-icon_fuben"></span>
      <span class="iconfont icon-iconset0425"></span>
      <span class="iconfont icon-changge-yuanshijituantubiao"></span>
      <span class="iconfont icon-pinglun" @click="blok"></span>
      <span class="iconfont icon-gengduo">
        <i>{{getCommontsCounts}}</i>
      </span>
    </div>
    <!-- 评论遮罩层 -->
    <div class="playMusic_commons" :class="com">
      <div class="playMusic_commons_header">
        <i class="iconfont icon-zuo" @click="none"></i>
        <i>评论</i>
      </div>
      <div class="playMusic_commons_flexd"></div>
      <div class="playMusic_commons_songInfo" v-for="item in getMusicInfoList" :key="item.id">
        <img :src="item.al.picUrl" />
        <span>{{item.name}}</span>
        <span>-{{item.ar[0].name}}</span>
      </div>
      <van-tabs v-model="active">
        <div class="vat">评论区</div>
        <van-tab title="全部">
          <div class="playMusic_commons_body">
            <ul>
              <li>
                <div
                  class="playMusic_commons_li"
                  v-for="(item,index) in getCommentsList"
                  :key="index"
                >
                  <img :src="item.user.avatarUrl" />
                  <span>{{item.user.nickname}}</span>
                  <span>{{time(index)}}</span>
                  <span class="iconfont icon-dianzan"></span>
                  <p>{{item.content}}</p>
                  <div class="xian"></div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="最热">
          <div class="playMusic_commons_body">
            <div class="playMusic_commons_body">
              <ul>
                <li>
                  <div
                    class="playMusic_commons_li"
                    v-for="(item,index) in getCommentsOfHotList"
                    :key="index"
                  >
                    <img :src="item.user.avatarUrl" />
                    <span>{{item.user.nickname}}</span>
                    <span>{{time(index)}}</span>
                    <span class="iconfont icon-dianzan"></span>
                    <p>{{item.content}}</p>
                    <div class="xian"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "animate.css";
// import { getIsMusic } from "../../api/axios";
// 引入格式化时间仓库
import moment from "moment";
import { getComments } from "../../api/axios";

import { getMusicInfo } from "../../api/axios";
import { getMusicUrl } from "../../api/axios";
// import { getSongWords } from "../../api/axios";
export default {
  data() {
    return {
      isplay: true,
      songId: this.$route.query.songId,
      getMusicInfoList: [],
      getMusicUrl: [],
      //音乐总时长
      getMusicTime: 0,
      // 当前时间
      currentTime: 0,
      // 格式化之前
      currentTimeBe: 0,
      //进度条宽
      currentWidth: 0,
      // 格式化之前总时间
      gehsihuaBe: 0,
      // 获取歌词
      getSongWordsList: [],
      //控制歌词是否显示
      iswords: false,
      c: "song_word_none",
      //初始化歌词数组
      // lyricsObjArr: [],
      // obj: {},

      active: "2",
      com: "song_word_none",
      // 歌词全部评论
      getCommentsList: [],
      // 评论时间
      // getCommentsTime: ""
      // 最热评论
      getCommentsOfHotList: [],
      // 评论数
      getCommontsCounts: ""
    };
  },
  async created() {
    // 获取歌曲地址
    // let getMusicData = await getMusicUrl(this.songId);
    // this.getMusicUrl = getMusicData.data;
  },
  async mounted() {
    // 获取歌曲地址;
    let getMusicData = await getMusicUrl(this.songId);
    this.getMusicUrl = getMusicData.data;

    // 获取歌曲详情;
    let getMusicInfoData = await getMusicInfo(this.songId);
    this.getMusicInfoList = getMusicInfoData.songs;

    // 格式化时间
    const gehsihua = getMusicInfoData.songs[0].dt;
    this.gehsihuaBe = gehsihua / 1000;

    let musicTime = moment(gehsihua).format("mm:ss");
    this.getMusicTime = musicTime;
    // --------------------
    //获取评论
    let getCommentsData = await getComments(this.songId);
    let commonts = getCommentsData.comments;
    this.getCommentsList = commonts;
    this.getCommentsOfHotList = getCommentsData.hotComments;
    this.getCommontsCounts = getCommentsData.comments.length;

    // 音乐是否可用
    // let a = await getIsMusic(this.songId);
    // console.log(a);

    // await this.time(1);
    // let gettime = getCommentsData.comments.time;
    // let geshihuaTime = moment(gettime).format("MMM Do YY");
    // this.getCommentsTime = geshihuaTime;
    // console.log(geshihuaTime);

    // console.log(getCommentsData.comments);

    // let getSongWordsData = await getSongWords(this.songId);
    // let lyric = getSongWordsData.lrc.lyric;

    // console.log(lyric);
    // 获取歌词
    // let getSongWordsData = await getSongWords(this.songId);
    // let lyric = getSongWordsData.lrc.lyric;
    // const regNewLine = /\n/;
    // const lineArr = lyric.split(regNewLine);
    // const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;

    // lineArr.forEach(item => {
    //   if (item === "") return;
    //   const obj = {};
    //   const time = item.match(regTime);

    //   obj.lyric =
    //     item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
    //   obj.time = time
    //     ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
    //     : 0;
    //   obj.uid = Math.random()
    //     .toString()
    //     .slice(-6);
    //   this.obj = obj;
    //   this.lyricsObjArr.push(this.obj);
    // });

    // 音乐切换
    this.$bus.$on("musicId", async data => {
      //音乐url
      let getMusicData = await getMusicUrl(data);
      this.getMusicUrl = getMusicData.data;

      // --------
      //切歌自动播放歌曲
      // this.controlMusic((this.isplay = false));
      // 音乐详情
      let getMusicInfoData = await getMusicInfo(data);
      this.getMusicInfoList = getMusicInfoData.songs;

      // 传递格式化zhijian的时间
      const gehsihua = getMusicInfoData.songs[0].dt;
      this.gehsihuaBe = gehsihua / 1000;
      // console.log(this.gehsihuaBe);
      let musicTime = moment(gehsihua).format("mm:ss");
      this.getMusicTime = musicTime;
      // ------------------------

      // 获取歌词
      // let getSongWordsData = await getSongWords(data);
      // let lyric = getSongWordsData.lrc.lyric;
      // const regNewLine = /\n/;
      // const lineArr = lyric.split(regNewLine);
      // const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;

      // lineArr.forEach(item => {
      //   if (item === "") return;
      //   const obj = {};
      //   const time = item.match(regTime);

      //   obj.lyric =
      //     item.split("]")[1].trim() === "" ? "" : item.split("]")[1].trim();
      //   obj.time = time
      //     ? this.formatLyricTime(time[0].slice(1, time[0].length - 1))
      //     : 0;
      //   obj.uid = Math.random()
      //     .toString()
      //     .slice(-6);
      //   this.obj = obj;
      //   this.lyricsObjArr.push(this.obj);
      // });
      // console.log(this.lyricsObjArr);
    });
  },

  methods: {
    async time(index) {
      let getCommentsData = await getComments(this.songId);

      let gettime = getCommentsData.comments[index].time;
      let i = moment(gettime).format("MMM Do YY");
      return i;
    },
    // formatLyricTime(time) {
    //   const regMin = /.*:/;
    //   const regSec = /:.*\./;
    //   const regMs = /\./;
    //   const min = parseInt(time.match(regMin)[0].slice(0, 2));
    //   let sec = parseInt(time.match(regSec)[0].slice(1, 3));
    //   const ms = time.slice(
    //     time.match(regMs).index + 1,
    //     time.match(regMs).index + 3
    //   );
    //   if (min !== 0) {
    //     sec += min * 60;
    //   }
    //   return Number(sec + "." + ms);
    // },

    isword() {
      this.iswords = !this.iswords;
      if (this.iswords === true) {
        this.c = "song_word";
      }
    },
    isword2() {
      this.iswords = !this.iswords;

      if (this.iswords === false) {
        this.c = "song_word_none";
      }
    },
    updateTime(e) {
      let time = e.target.currentTime;
      this.currentTimeBe = time;
      time = time | 0;
      let minute = (time / 60) | 0;
      let second = time % 60;
      if (minute <= 9) {
        minute = `${0}${minute}`;
      }
      if (second <= 9) {
        second = `${0}${second}`;
      }
      const times = `${minute}:${second}`;
      this.currentTime = times;
      this.currentWidth = (this.currentTimeBe / this.gehsihuaBe) * 250;
    },

    // 音乐播放按钮
    controlMusic() {
      this.isplay = !this.isplay;
      if (this.isplay === false) {
        this.$refs.audioDom[0].pause();
      } else {
        this.$refs.audioDom[0].play();
      }
    },
    // 左播放按钮
    leftSong() {
      this.$bus.$emit("changeSong", "上一首");
    },
    // 右播放按钮
    rightSong() {
      this.$bus.$emit("changeSong", "下一首");
    },
    blok() {
      this.com = "playMusic_commons";
    },
    none() {
      this.com = "song_word_none";
    }
  },

  components: {}
};
</script>

<style scoped>
.playMusic {
  z-index: 999;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(46, 45, 45, 0.9);
}
.playMusic_header {
  height: 35px;
  width: 100%;
}
.playMusic_header .icon-ai-arrow-down {
  color: #ffffff;

  margin-left: 10px;
  left: 0;
  position: absolute;
  font-size: 20px;
  line-height: 35px;
}
.playMusic_header span:nth-child(2) {
  display: inline-block;
  text-align: center;
  font-size: 17px;
  line-height: 35px;
  margin-left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
}
.playMusic_header span:nth-child(2) div {
  margin-top: -7px;
  text-align: center;
  font-size: 14px;
}
.playMusic_header .icon-fenxiang1 {
  color: #ffffff;
  margin-right: 10px;
  right: 0;
  position: absolute;
  font-size: 20px;
  line-height: 35px;
}
.playMusic_circle {
  position: relative;
  height: 300px;
  width: 300px;
  background-color: rgba(230, 222, 222, 0.1);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  border-radius: 150px;
}
.playMusic_circle_black {
  position: absolute;
  height: 280px;
  width: 280px;
  background-color: black;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 140px;
  margin-top: 10px;
}

.playMusic_circle_black img {
  position: absolute;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  border-radius: 140px;
  margin-top: 40px;
}
.playMusic_circle_black .n {
  transform: rotate(350deg);
}
@keyframes disc {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animation {
  animation: disc 50s linear infinite;
}

.playMusic_foot {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0px;
  height: 100px;
  width: 100%;
  line-height: 80px;
  text-align: center;
}
.playMusic_foot span {
  margin-top: 20px;
  height: 70px;
  line-height: 45px;
}
.playMusic_foot span:nth-child(1) {
  color: #ffffff;

  font-size: 35px;
}
.playMusic_foot span:nth-child(2) {
  color: #ffffff;

  font-size: 25px;
}
.playMusic_foot .icon-bofang2 {
  color: #ffffff;

  font-size: 60px;
}
.playMusic_foot .icon-iconfront- {
  color: #ffffff;

  font-size: 63px;
}

.playMusic_foot span:nth-child(4) {
  color: #ffffff;

  font-size: 25px;
}
.playMusic_foot span:nth-child(5) {
  font-size: 25px;
  color: #ffffff;
  font-weight: 100;
}
.progressBar {
  margin-top: 120px;
  height: 20px;
  width: 100%;
}
.progressBar span:nth-child(1) {
  color: rgba(255, 255, 255, 0.4);
  left: 0;
  margin-left: 20px;
  position: absolute;
  font-size: 12px;
}
.progressBar span:nth-child(2) {
  display: inline-block;
  position: absolute;
  line-height: 60px;
  width: 250px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-left: 50%;
  transform: translateX(-50%);
  /* margin: auto; */
  margin-top: 5px;
}
.progressBar span:nth-child(3) {
  color: rgba(255, 255, 255, 0.4);
  right: 0;
  margin-right: 20px;
  position: absolute;
  font-size: 12px;
}
.time_progressBar {
  position: absolute;
  width: 20px;
  height: 100%;
  /* background-color: red; */
  background-color: rgba(255, 255, 255, 0.8);
  /* position: relative; */
}
.time_progressBar_circle {
  position: absolute;
  height: 7px;
  width: 7px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  right: -8px;
  top: -2px;
}
.song_word {
  z-index: 1;
  position: absolute;
  height: 450px;
  width: 320px;
  background-color: rgb(142, 139, 139);
  margin-left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin-top: 80px;
  overflow-y: scroll;
}
.song_word_none {
  display: none;
}
.song_word_height {
  text-align: center;
  margin-top: 50px;
}
.song_word_height h5 {
  margin-bottom: 15px;
}
.song_word::-webkit-scrollbar {
  width: 0px;
}
.playMusic_recom {
  height: 25px;
  width: 100%;
  margin-top: -70px;
  display: flex;
  justify-content: space-around;
  line-height: 25px;
}
.playMusic_recom span {
  font-size: 21px;
  color: #ffffff;
}
.playMusic_recom span:nth-child(5) i {
  position: absolute;
  height: 10px;
  width: 15px;
  margin-left: -80px;
  font-size: 12px;
  line-height: 10px;
}
.playMusic_commons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f0efef;
  transform: 0.5s linear;
}
.playMusic_commons_header {
  z-index: 2;
  background-color: #ffffff;
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
.playMusic_commons_songInfo {
  height: 40px;
  width: 100%;
  background-color: #ffffff;
}
.playMusic_commons_songInfo img {
  margin-left: 15px;
  height: 35px;
  width: 35px;
  border-radius: 18px;
  vertical-align: middle;
}
.playMusic_commons_songInfo span:nth-child(2) {
  margin-left: 10px;
  font-size: 13px;
}
.playMusic_commons_songInfo span:nth-child(3) {
  margin-left: 5px;
  font-size: 13px;
}

/deep/ .van-tabs {
  margin-top: 10px;
}

.vat {
  margin-left: 15px;
  position: absolute;
  margin-top: -35px;
}
/deep/ .van-tab:nth-child(1) {
  margin-left: 250px;
}
/deep/ .van-tab:nth-child(2) {
  margin-left: -30px;
}
.playMusic_commons_body {
  height: 600px;
  background-color: #ffffff;
  width: 100%;
}
.playMusic_commons_li {
  /* margin-top: 20px; */
  padding-top: 20px;
  margin-left: 15px;
}
.playMusic_commons_li img {
  height: 30px;
  width: 30px;
  border-radius: 15px;
}
.playMusic_commons_li span {
  margin-left: 8px;
  position: absolute;
  font-size: 14px;
}
.playMusic_commons_li span:nth-child(3) {
  margin-top: 17px;
  margin-left: 8px;
  position: absolute;
  font-size: 12px;
  color: rgb(152, 150, 147);
}
.playMusic_commons_li span:nth-child(4) {
  margin-right: 15px;
  right: 0;
  margin-top: 17px;
  position: absolute;
  font-size: 17px;
  color: rgb(152, 150, 147);
}
.playMusic_commons_li p {
  letter-spacing: 2px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 37px;
  width: 85%;
}
.xian {
  margin: 0 auto;
  margin-top: 15px;
  height: 1px;
  width: 85%;
  background-color: rgb(233, 228, 228);
}
</style>