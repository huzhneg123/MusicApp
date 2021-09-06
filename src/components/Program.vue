<template>
  <div class="Music2">
    <transition name="max">
      <div class="MUsic_Max" v-show="fullScreen">
        <img class="qwe" :src="currentSong.blurCoverUrl" />
        <div class="playMusic_header">
          <span class="iconfont icon-ai-arrow-down" @click="close"></span>
          <span>{{currentSong.description}}</span>

          <h2>{{currentSong.name}}</h2>
          <span class="iconfont icon-fenxiang1"></span>
        </div>
        <div class="playMusic_circle">
          <img class="disc" :src="currentSong.blurCoverUrl" />
        </div>
        <div class="playMusic_foot">
          <span :class="iconMode" @click="changeMode"></span>
          <span @click="prev" class="iconfont icon-zuobofang"></span>
          <span @click="togglePlaying" :class="playIcon"></span>
          <span @click="next" class="iconfont icon-youbofang"></span>
          <span class="iconfont icon-liebiao-xiantiao"></span>
        </div>
        <!-- 进度条 -->
        <div class="progressBar">
          <span id="demo">{{format(currentTime) }}</span>
          <span ref="fatherBar" @click="progressClick">
            <i
              @touchstart.prevent="progressTouchStart"
              @touchmove.prevent="progressTouchMove"
              @touchend="progressTouchEnd"
              class="time_progressBar"
              ref="bar"
              :style="{width: (currentTime / (currentSong.duration / 1000)) * 250+'px',}"
            >
              <i class="time_progressBar_circle"></i>
            </i>
          </span>
          <span>{{format(currentSong.duration/1000)}}</span>
        </div>
        <!-- 分享区域 -->
        <div class="playMusic_recom">
          <span class="iconfont icon-icon_fuben"></span>
          <span class="iconfont icon-iconset0425"></span>
          <span class="iconfont icon-changge-yuanshijituantubiao"></span>
          <span class="iconfont icon-pinglun" @click="block"></span>
          <span class="iconfont icon-gengduo">
            <i>123</i>
          </span>
        </div>
        <!-- 评论区 -->
        <transition name="recommen">
          <Recomments v-show="isShow" @changeShow="change" class="re"></Recomments>
        </transition>
        <!-- 音频 -->
        <audio @timeupdate="updateTime" @ended="end" ref="audio" :src="programsUrl" autoplay></audio>
      </div>
    </transition>

    <div class="MUsic_Mix" v-show="!fullScreen">
      <img :src="currentSong.blurCoverUrl" />
      <span @click="open">{{currentSong.description}}</span>
      <span @click="togglePlaying" :class="playIcon"></span>
    </div>
  </div>
</template>

<script>
import Recomments from "@/components/recomments/Recomments";
import { shuffle } from "../common/js/util";
import { playMode } from "../common/js/config";
import { getMusicUrl } from "../api/axios";

import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      programsUrl: "",
      currentTime: 0,
      barWith: 0
    };
  },

  mounted() {},

  computed: {
    show() {
      return this.isShow;
    },
    iconMode() {
      return this.mode === playMode.sequence
        ? "iconfont icon-23_shunxubofang"
        : this.mode === playMode.loop
        ? "iconfont icon-yuanxunhuanbofang"
        : "iconfont icon-suijibofang";
    },
    playIcon() {
      return this.playing
        ? "iconfont icon-iconfront-"
        : "iconfont icon-bofang2";
    },
    ...mapGetters([
      "fullScreen",
      "currentSong",
      "playing",
      "currentIndex",
      "playlist",
      "mode",
      "sequenceList"
    ])
  },
  created() {
    this.touch = {};
  },

  methods: {
    change(data) {
      this.isShow = data;
    },
    block() {
      this.isShow = true;
    },
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode === playMode.radom) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlaylist(list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    progressClick(e) {
      this.$refs.bar.style.width = e.offsetX + "px";
      this.$refs.audio.currentTime =
        (e.offsetX / 250) * (this.currentSong.duration / 1000);
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.left = this.$refs.bar.clientWidth;
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      const deltaX = e.touches[0].pageX - this.touch.startX;
      const offsetWith = Math.max(0, this.touch.left + deltaX);
      this.$refs.bar.style.width = `${offsetWith}px`;
    },
    progressTouchEnd() {
      this.touch.initiated = false;
      let a = this.$refs.bar.clientWidth / 250;
      this.$refs.audio.currentTime = (this.currentSong.duration / 1000) * a;
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;
    },
    format(interval) {
      interval = interval | 0;
      let minute = (interval / 60) | 0;
      let second = interval % 60;
      if (minute <= 9) {
        minute = `${0}${minute}`;
      }

      if (second <= 9) {
        second = `${0}${second}`;
      }
      return `${minute}:${second}`;
    },
    end() {
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.next();
      }
    },
    loop() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
    },
    next() {
      let index = this.currentIndex + 1;
      if (index === this.playlist.length) {
        index = 0;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    prev() {
      let index = this.currentIndex - 1;
      if (index === -1) {
        index = this.playlist.length - 1;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
    },
    close() {
      this.setFullScreen(false);
    },
    open() {
      this.setFullScreen(true);
    },
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAY_MODE",
      setPlaylist: "SET_PLAYLIST"
    }),
    togglePlaying() {
      this.setPlayingState(!this.playing);
    }
  },
  watch: {
    async currentSong() {
      let getProgramUrlData = await getMusicUrl(this.currentSong.mainSong.id);
      setTimeout(() => {
        this.programsUrl = getProgramUrlData.data[0].url;
      }, 500);
    },
    playing(newPlaying) {
      const audio = this.$refs.audio;
      newPlaying ? audio.play() : audio.pause();
    }
  },

  components: {
    Recomments
  }
};
</script>

<style scoped>
.qwe {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(20px);
}
/* .Music2 {
  position: relative;
  z-index: 4;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
} */
.MUsic_Max {
  position: fixed;
  z-index: 4;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(127, 123, 123);
}
.MUsic_Mix {
  /* z-index: 1; */
  background-color: #f5f5f5;

  /* height: 5%; */
  height: 35px;
  bottom: 55px;
  left: 0;
  position: fixed;
  right: 0;
  color: #ffffff;
}
.MUsic_Mix img {
  height: 30px;
  width: 30px;
  margin-left: 15px;
  border-radius: 5px;
  margin-top: 2px;
  vertical-align: middle;
}
.MUsic_Mix span {
  display: inline-block;
  font-size: 13px;
  color: black;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  margin-top: 10px;
  margin-left: 5px;
  height: 100%;
}
.MUsic_Mix span:nth-child(3) {
  position: absolute;
  right: 0;
  font-size: 25px;
  line-height: 18px;
  margin-right: -210px;
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
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
}
.playMusic_header span:nth-child(2) div {
  margin-top: -7px;
  text-align: center;
  font-size: 14px;
}
.playMusic_header h2 {
  font-size: 13px;
  color: rgb(193, 189, 189);

  text-align: center;
  padding-top: 40px;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
}
.playMusic_header .icon-fenxiang1 {
  color: #ffffff;
  margin-right: 10px;
  right: 0;
  position: absolute;
  font-size: 20px;
  line-height: 35px;
}

.playMusic_circle img {
  width: 70%;
  height: 200px;
  margin-left: 15%;
  margin-top: 90px;
  border-radius: 8px;
  /* position: absolute; */
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
/* 进度条 */
.progressBar {
  margin-top: 225px;
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
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-left: 50%;
  transform: translateX(-50%);
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
  background-color: rgba(255, 255, 255, 0.8);
}
.time_progressBar_circle {
  position: absolute;
  height: 6px;
  width: 6px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  right: -8px;
  top: -2px;
}
/*  */
.playMusic_recom {
  height: 25px;
  width: 100%;
  margin-top: -70px;
  display: flex;
  justify-content: space-evenly;
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
.max-enter-active,
.max-leaver-active {
  transition: all 0.4s;
}
.max-enter,
.max-leave-to {
  opacity: 0;
  transition: all 0.4s;
}

.recommen-enter-active,
.recommen-leaver-active {
  transition: all 0.4s;
}
.recommen-enter,
.recommen-leave-to {
  opacity: 0;
  transition: all 0.4s;
}
</style>