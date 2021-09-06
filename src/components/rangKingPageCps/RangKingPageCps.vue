<template>
  <div class="rangKingPage">
    <div class="hotSongTop_search">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span class="hotSongTop_title"></span>
      <span class="iconfont icon-icon-system-search"></span>
    </div>
    <div class="rangKingPage_body">
      <img :src="pic" />
      <span>热歌榜</span>
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
    <!-- songlist -->
    <div class="rangKingPageList">
      <ul>
        <li v-for="(item,index) in songList" :key="item.id" @click="toPath(item.id)">
          <span>{{index+1}}</span>
          <span>
            <h5>{{item.name}}</h5>
            <h5>{{item.al.name}}</h5>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pic: {
      type: String,
      default: ""
    },
    songList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isFenXiang: true
    };
  },
  methods: {
    toPath(item) {
      this.$router.push({
        path: "/music",
        query: {
          songId: item
        }
      });
    }
  }
};
</script>

<style scoped>
.rangKingPage_body {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
.rangKingPage_body img {
  width: 100%;
  height: 100%;
}
.rangKingPage_body span {
  position: absolute;
  font-size: 50px;
  margin-top: 60px;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
}

.rangKingPage_body::after {
  z-index: 0;
  content: "";
  width: 180%;
  height: 200px;
  position: absolute;
  left: -40%;
  top: 0;
  border-radius: 0 0 50% 50%;
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
  margin-top: -20px;
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
  color: #ffffff;
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
  color: #ffffff;
}
.rangKingPageList {
  margin-top: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 430px;
}
.rangKingPageList ul {
  margin-top: 20px;
  margin-left: 10px;
}
.rangKingPageList ul li {
  margin-top: 20px;
  display: flex;
}
.rangKingPageList ul li span:nth-child(1) {
  display: inline-block;
  margin-left: 10px;
  color: rgb(154, 153, 152);
}
.rangKingPageList ul li span:nth-child(2) {
  display: inline-block;
  margin-left: 10px;
}
.rangKingPageList ul li span:nth-child(2) h5:nth-child(2) {
  width: 250px;
  margin-top: 2px;
  font-size: 12px;
  color: rgb(154, 153, 152);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>