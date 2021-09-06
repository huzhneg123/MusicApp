<template>
  <div class="hotSongTop">
    <div class="hotSongTop_search">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span class="hotSongTop_title" v-show="isShow">新歌榜</span>
      <span class="iconfont icon-icon-system-search"></span>
    </div>
    <div class="platlist_body">
      <span>新歌榜</span>

      <span class="playlist_person">
        <div class="playlist_avator"></div>
      </span>
    </div>
    <div class="fenxiang" v-show="isFenXiang">
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
    <!--列表歌曲  -->
    <div class="hotSongTop_list">
      <ul>
        <li v-for="(item,index) in hotSongTopList" :key="index" @click="toPath(item.id,index) ">
          <span>{{index+1}}</span>
          <span>
            <h5>{{item.name}}</h5>
            <h5>{{item.ar[0].name}}</h5>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "animate.css";

import { getTop } from "../../../api/axios";

export default {
  data() {
    return {
      isShow: false,
      isFenXiang: true,
      hotSongTopList: []
    };
  },
  created() {
    window.addEventListener("scroll", this.windowScrollListener);
  },
  async mounted() {
    let hotSongTop = await getTop(0);
    this.hotSongTopList = hotSongTop.playlist.tracks;
  },
  methods: {
    windowScrollListener() {
      // 获取滚动条的高度
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= 100) {
        // 利用布尔值控制元素的显隐
        this.isShow = true;
      }
      if (scrollTop < 100) {
        // 利用布尔值控制元素的显隐
        this.isShow = false;
      }
      if (scrollTop > 120) {
        // 利用布尔值控制元素的显隐
        this.isFenXiang = false;
      }
      if (scrollTop < 120) {
        // 利用布尔值控制元素的显隐
        this.isFenXiang = true;
      }
    },
    toPath(item, index) {
      this.$router.push({
        path: "/music",
        query: {
          songId: item,
          index: index
        }
      });
    }
  }
};
</script>

<style >
.platlist_body {
  /* z-index: 1; */
  width: 100%;
  height: 200px;
  position: relative;
  /* z-index: 0; */
  overflow: hidden;
}
.platlist_body span:nth-child(1) {
  position: absolute;
  font-size: 50px;
  margin-top: 60px;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
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
/* search */
.hotSongTop_search {
  z-index: 1;
  position: fixed;
  height: 50px;
  width: 100%;
}
.hotSongTop_search .icon-zuo {
  font-size: 30px;
  margin-left: 15px;
  line-height: 50px;
}
.hotSongTop_title {
  display: inline-block;
  position: absolute;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  transform: translateX(-50%);
  margin-left: 50%;
  left: 0;
}
.hotSongTop_search span:nth-child(3) {
  position: absolute;
  right: 0;
  margin-right: 15px;
  font-size: 30px;
  line-height: 50px;
}
.hotSongTop_list {
  margin-top: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 442px;
}
.hotSongTop_list ul {
  margin-top: 20px;
}
.hotSongTop_list ul li {
  margin-top: 20px;
  display: flex;
}
.hotSongTop_list ul li span:nth-child(1) {
  display: inline-block;
  margin-left: 10px;
  color: rgb(154, 153, 152);
}
.hotSongTop_list ul li span:nth-child(2) {
  display: inline-block;
  margin-left: 10px;
}
.hotSongTop_list ul li span:nth-child(2) h5:nth-child(2) {
  width: 250px;
  margin-top: 2px;
  font-size: 12px;
  color: rgb(154, 153, 152);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>