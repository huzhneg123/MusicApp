<template>
  <div>
    <div class="alumCps">
      <ChildpageHeader title="专辑" class="playlist_header" />
      <div class="platlist_body">
        <img :src="alumImg" />
        <span class="playlist_person">
          <h5>{{songName}}</h5>
          <h5>歌手：{{artistName}}</h5>
          <h5>发行时间：{{publishTime}}</h5>
        </span>
      </div>
      <div class="fenxiang">
        <span>
          <i class="iconfont icon-shoucang1"></i>
          {{getAlumCounts.subCount}}
        </span>
        <span>
          <i class="iconfont icon-xiaoxi" @click="comments"></i>
          {{getAlumCounts.commentCount}}
        </span>
        <span>
          <i class="iconfont icon-fenxiang1"></i>
          {{getAlumCounts.shareCount}}
        </span>
      </div>
    </div>
    <div class="alumComnets" v-show="isCom">
      <div class="alumComnets_header">
        <i class="iconfont icon-zuo" @click="none"></i>
        <i>评论</i>
      </div>
      <div class="alumComnets_header_zhan"></div>
      <div class="alumComnets_title">
        <img :src="alumImg" />
        <span>{{songName}}</span>
      </div>
      <transition name="tag">
        <div class="alumComnets_tag" v-show="isShow" :class="wo">
          评论区
          <i>全部</i>
        </div>
      </transition>

      <div class="alumComnets_tag_zhan"></div>
      <div class="alumComnets_list">
        <ul>
          <li v-for="item in aulmComments" :key="item.time">
            <img :src="item.user.avatarUrl" />
            <span>我跟想念你</span>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ChildpageHeader from "../../components/childPageHeader/ChildpageHeader";
export default {
  props: {
    artistName: {
      type: String,
      default: ""
    },
    songName: {
      type: String,
      default: ""
    },
    publishTime: {
      type: String,
      default: ""
    },
    alumImg: {
      type: String,
      default: ""
    },

    aulmComments: {
      type: Array,

      default: () => []
    },
    getAlumCounts: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isShow: false,
      wo: "",
      // com: "alumComnets_yin"
      isCom: false
    };
  },
  async mounted() {
    console.log(this.getAlumCounts);
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    comments() {
      this.isCom = true;
    },
    none() {
      this.isCom = false;
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 55) {
        this.isShow = true;
        this.wo = "wowo";
      } else if (scrollTop < 55) {
        this.isShow = false;
      }
    }
  },
  components: {
    ChildpageHeader
  }
};
</script>

<style scoped>
.wowo {
  position: fixed;
  margin-top: -20px;
}
.alumCps {
  background-color: #ffffff;
  height: 100%;
}
.playlist_header {
  background-color: rgba(0, 0, 0, 0.7);
  color: #f7f5f5;
}

.platlist_body {
  width: 100%;
  height: 200px;
  position: relative;
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
  background-color: rgba(0, 0, 0, 0.7);
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
  width: 60%;
  font-size: 16px;
  color: #f7f5f5;
  letter-spacing: 2px;
  margin-left: 130px;
  margin-top: 15px;
}
.playlist_person h5:nth-child(2) {
  display: inline-block;
  margin-top: 23px;
  font-size: 13px;
}
.playlist_person h5:nth-child(3) {
  display: inline-block;

  margin-top: 23px;
  font-size: 13px;
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
/* 评论 */
.alumComnets_xian {
  display: block;
}
.alumComnets_yin {
  display: none;
}
.alumComnets {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 2;
  height: 1000px;
}
.alumComnets .alumComnets_header {
  z-index: 2;
  background-color: #ffffff;
  position: fixed;
  line-height: 50px;
  height: 50px;
  width: 100%;
}
.alumComnets .alumComnets_header i {
  margin-left: 15px;
  position: absolute;
  font-size: 25px;
}
.alumComnets .alumComnets_header i:nth-child(2) {
  position: absolute;
  font-size: 19px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.alumComnets .alumComnets_header_zhan {
  height: 50px;
}
.alumComnets_title {
  height: 60px;
  width: 100%;
}
.alumComnets_title img {
  height: 100%;
  width: 60px;
  margin-left: 15px;
  vertical-align: middle;
}
.alumComnets_title span {
  margin-left: 15px;
}
.alumComnets_tag {
  height: 30px;
  background-color: #ffffff;
  padding-left: 15px;
  margin-top: -60px;
  line-height: 30px;
  /* position: fixed; */
  /* transition: all 0.s; */
  width: 100%;
}
.alumComnets_tag i {
  right: 0;
  position: absolute;
  margin-right: 30px;
}
.alumComnets_tag_zhan {
  /* height: 45px; */
}
.wa {
  height: 30px;
  width: 100%;
  background-color: yellow;
}
.alumComnets_list ul {
  margin-top: 30px;
  margin-left: 15px;
}
.alumComnets_list ul li {
  margin-bottom: 25px;
  border-bottom: 0.1px solid rgb(236, 232, 232);
}
.alumComnets_list ul li img {
  height: 35px;
  width: 35px;
  border-radius: 18px;
  vertical-align: middle;
}
.alumComnets_list ul li span {
  font-size: 13px;
  margin-left: 10px;
}
.alumComnets_list ul li p {
  font-size: 14px;
  width: 80%;
  margin-left: 45px;
  letter-spacing: 2px;
  line-height: 20px;
  padding-bottom: 15px;
}
</style>