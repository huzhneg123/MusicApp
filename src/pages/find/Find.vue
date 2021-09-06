<template>
  <section class="find">
    <LeftNav></LeftNav>

    <div class="fand_header">
      <div class="left iconfont icon-nav"></div>
      <a>
        <div class="middle" @click="$router.push('/search')">
          <span class="iconfont icon-icon-system-search"></span>
          <span>大家都在听 声控助眠</span>
        </div>
      </a>

      <span class="right iconfont icon-maikefeng"></span>
    </div>
    <div class="fand_header_zhan"></div>
    <div class="better_s" ref="wrapper">
      <div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in banner" :key="index" class="pic">
            <img :src="item.imageUrl" />
          </van-swipe-item>
        </van-swipe>

        <!-- 中间路由 -->
        <div class="route">
          <div class="swiper-container y">
            <div class="swiper-wrapper">
              <div class="swiper-slide font">
                <a>
                  <div class="item">
                    <span class="iconfont icon-meiriqiandao"></span>
                    <p>每日推荐</p>
                  </div>
                </a>
                <a>
                  <div class="item">
                    <span class="iconfont icon-FM"></span>
                    <p>私人FM</p>
                  </div>
                </a>
                <a>
                  <div class="item">
                    <span class="iconfont icon-gedan"></span>
                    <p>歌单</p>
                  </div>
                </a>
                <a>
                  <div class="item" @click="$router.push('/rankingList')">
                    <span class="iconfont icon-paihangbang"></span>
                    <p>排行榜</p>
                  </div>
                </a>
                <a>
                  <div class="item" @click="$router.push('/topic')">
                    <span class="iconfont icon-zhibobofangshexiangjikanyanjingdianshimianxing"></span>
                    <p>话题</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide font">
                <a>
                  <div class="item">
                    <span class="iconfont icon-faxian_zhuanzhumingxiang"></span>
                    <p>数字专辑</p>
                  </div>
                </a>
                <a>
                  <div class="item">
                    <span class="iconfont icon-faxian_gefang"></span>
                    <p>专注冥想</p>
                  </div>
                </a>
                <a>
                  <div class="item">
                    <span class="iconfont icon-faxian_youxizhuanqu"></span>
                    <p>歌房</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 推荐歌单 -->
        <div class="tuijian">
          <div class="top">
            <span class="tui">推荐歌单</span>
            <a>
              <span class="more">更多></span>
            </a>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide video" v-for="(songLists,index) in songListArr" :key="index">
                <a v-for="(song,index) in songLists" :key="index">
                  <img :src="song.picUrl" />
                  <p class="ellipsis">{{song.name}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 最新专辑 -->
        <div class="newMusci">
          <div class="newMusci_header">
            <span class="tui">最新专辑</span>
            <span>更多></span>
          </div>
          <div class="newMusic_lunbooo">
            <span v-for="item in newAlbumList" :key="item.id" @click="toPath(item)">
              <img :src="item.picUrl" />
              <p>{{item.name}}</p>
            </span>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="figure">
          <div class="swiper-container find_top">
            <div class="topHeader">排行榜</div>

            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="item in newSongList"
                :key="item.name"
                @click="$router.push('/ranKingList')"
              >
                <div class="find_top_nav">
                  <h5 class="find_top_nav_title">
                    {{item.name}}
                    <i class="iconfont icon-jiantou"></i>
                  </h5>
                  <div class="find_top_nav_list">
                    <ul>
                      <li v-for="(item,index) in item.tracks" :key="item.id">
                        <img :src="item.al.picUrl" />
                        <span>{{index+1}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.ar[0].name}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="swiper-slide"
                v-for="item in hotSongList"
                :key="item.name"
                @click="$router.push('/ranKingList')"
              >
                <div class="find_top_nav">
                  <h5 class="find_top_nav_title">
                    {{item.name}}
                    <i class="iconfont icon-jiantou"></i>
                  </h5>
                  <div class="find_top_nav_list">
                    <ul>
                      <li v-for="(item,index) in item.tracks" :key="item.id">
                        <img :src="item.al.picUrl" />
                        <span>{{index+1}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.ar[0].name}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                v-for="item in madeMyselfList"
                :key="item.name"
                @click="$router.push('/ranKingList')"
              >
                <div class="find_top_nav">
                  <h5 class="find_top_nav_title">
                    {{item.name}}
                    <i class="iconfont icon-jiantou"></i>
                  </h5>
                  <div class="find_top_nav_list">
                    <ul>
                      <li v-for="(item,index) in item.tracks" :key="item.id">
                        <img :src="item.al.picUrl" />
                        <span>{{index+1}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.ar[0].name}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="swiper-slide"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 新碟上架 -->
        <div class="newCd">
          <div class="newCd_header">
            新碟上架
            <span @click="$router.push('/allNewCd')">更多</span>
          </div>
          <div class="newCd_Body">
            <ul>
              <li v-for="item in getNewCdList" :key="item.id" @click="toPath2(item)">
                <img :src="item.picUrl" />
                <span>{{item.name}}</span>
                <span>{{item.artist.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 承载二级路由 -->
    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import { getNewCd } from "../../api/axios";
// import { getSongDan } from "../../api/axios";
import { getTop } from "../../api/axios";
import LeftNav from "@/components/LeftNav/LeftNav";
// 下载swiper引入
import Swiper from "swiper";
import "swiper/swiper.min.css";
// 引入van
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
// 引入betterScroll
import BScroll from "better-scroll";
// 引入ajax
import ajax from "@/api/ajax";

export default {
  data() {
    return {
      banner: [],
      songList: [],
      newAlbumList: [],
      newSongList: [],
      hotSongList: [],
      madeMyselfList: [],
      scroller: null,
      getNewCdList: []
    };
  },
  computed: {
    songListArr() {
      const songLists = this.songList;
      const arr = [];
      let minArr = [];
      songLists.forEach(e => {
        if (minArr.length === 3) {
          minArr = [];
        }
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(e);
      });
      return arr;
    }
  },
  async mounted() {
    // 轮播图;
    let bannerList = await ajax("http://localhost:3000/banner", { type: 2 });
    this.banner = bannerList.banners;
    // 歌曲推荐
    let songListt = await ajax("http://localhost:3000/personalized", {
      limit: 1
    });
    this.songList = songListt.result.slice(0, 6);
    // 最新专辑
    let newAlbumData = await ajax("http://localhost:3000/album/newest");
    this.newAlbumList = newAlbumData.albums.slice(0, 4);
    console.log(this.newAlbumList);

    // 新歌-------
    let TopData = await getTop(0);
    let newSong = [];
    let newS = {
      name: TopData.playlist.name,
      tracks: TopData.playlist.tracks.slice(0, 3)
    };
    newSong.push(newS);
    this.newSongList = newSong;
    // 热歌-------
    let hotData = await getTop(1);
    let hotSong = [];
    let hotS = {
      name: hotData.playlist.name,
      tracks: hotData.playlist.tracks.slice(0, 3)
    };
    hotSong.push(hotS);
    this.hotSongList = hotSong;
    // 原创榜单-------
    let madeMyselfData = await getTop(2);
    let madeMyselfSong = [];
    let madeMyselfS = {
      name: madeMyselfData.playlist.name,
      tracks: madeMyselfData.playlist.tracks.slice(0, 3)
    };
    madeMyselfSong.push(madeMyselfS);
    this.madeMyselfList = madeMyselfSong;
    // 新碟上架
    let getNewCdData = await getNewCd(3, "JP");
    this.getNewCdList = getNewCdData.albums;

    //创建betterScroll实例
    this.scroller = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      // 下拉加载
      pullDownRefresh: {
        threshold: 100,
        stop: 0
      },
      // 上拉加载
      pullUpLoad: {
        threshold: 100
      }
    });

    // 创建swiper实例
    new Swiper(".swiper-container", {
      // 循环轮播
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    // HeaderTop,
    LeftNav
  },
  methods: {
    toPath(item) {
      this.$router.push({
        path: "/alumPage",
        query: {
          items: JSON.stringify(item)
        }
      });
    },
    toPath2(item) {
      this.$router.push({
        path: "/alumPage",
        query: {
          items: JSON.stringify(item)
        }
      });
    }
  }
};
</script>

<style >
.find {
}
.newMusic_lunbooo {
  padding-top: 10px;
  height: 120px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #ffffff;
}

.newMusic_lunbooo img {
  margin-left: 17px;
  margin-right: 6px;
  height: 80%;
  width: 100px;
  border-radius: 15px;
}
.newMusic_lunbooo span p {
  margin-left: 18px;

  font-size: 12px;
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.newMusic_lunbooo::-webkit-scrollbar {
  display: none;
}

.better_s {
  height: 580px;
}
.fand_header {
  z-index: 3;
  position: fixed;
  /* position: relative; */
  height: 60px;
  width: 100%;
  background-color: #e5e1e2;
}
.fand_header_zhan {
  height: 60px;
}
.left {
  position: absolute;
  font-size: 28px;
  font-weight: 600;
  line-height: 60px;
  width: 30px;
  left: 0;
  margin-left: 5px;
}
.middle {
  position: absolute;
  height: 30px;
  left: 50px;
  right: 50px;
  margin-top: 15px;
  background-color: #fafafa;
  border-radius: 25px;
}
.middle span {
  position: absolute;
  margin-left: 50px;
  font-size: 20px;
  color: #c8c8c8;
  line-height: 30px;
}
.middle span:last-child {
  font-size: 14px;
  margin-left: 70px;
  line-height: 30px;
  color: #c8c8c8;
}
.right {
  position: absolute;
  right: 0;
  font-size: 25px;
  line-height: 60px;
  margin-right: 5px;
}
/* ---------- */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
/* ---------- */
.wo {
  display: flex;
}

.header {
  position: relative;

  height: 60px;
  width: 100%;
  background-color: #e5e1e2;
}
.left {
  position: absolute;
  font-size: 28px;
  font-weight: 600;
  line-height: 60px;
  width: 30px;
  left: 0;
  margin-left: 5px;
}
.middle {
  position: absolute;
  height: 30px;
  left: 50px;
  right: 50px;
  margin-top: 15px;
  background-color: #fafafa;
  border-radius: 25px;
}
.middle span {
  position: absolute;
  margin-left: 50px;
  font-size: 20px;
  color: #c8c8c8;
  line-height: 30px;
}
.middle span:last-child {
  font-size: 14px;
  margin-left: 70px;
  line-height: 30px;
  color: #c8c8c8;
}
.right {
  position: absolute;
  right: 0;
  font-size: 25px;
  line-height: 60px;
  margin-right: 5px;
}
/* 轮播图 */
.pic {
  width: 100%;
  height: 115px;
}
.pic img {
  width: 100%;
  /* height: 100%; */
}

/* 中间路由 */
.font {
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 0.2px solid rgb(245, 241, 241);
  justify-content: space-around;
}
.swiper-slide .item {
  margin-top: 20px;
}
.swiper-slide .item .iconfont {
  color: #f9796e;
  font-size: 30px;
}
.swiper-slide .item p {
  font-size: 10px;
}
/* 推荐歌单 */
.tuijian {
  background-color: #ffffff;
}
.top {
  height: 15px;
  padding-top: 10px;
}
.top .tui {
  margin-left: 17px;
  font-size: 17px;
}
.top .more {
  position: absolute;
  border: 1px solid rgb(90, 88, 88);
  right: 17px;
  font-size: 12px;
  height: 15px;
  width: 40px;
  line-height: 15px;
  border-radius: 10px;
  text-align: center;
}
/* 视频 */
.video {
  margin-top: 10px;
  height: 140px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
}
.video a {
  width: 100px;
  height: 60%;
  margin-top: 5px;
}
.video a img {
  width: 100%;
  height: 100%;
}
.video a p {
  font-size: 12px;
  color: black;
  letter-spacing: 1px;
}
/* ------------ */
.musicItem {
  margin-top: 5px;
  height: 40px;
  width: 93%;
  margin-left: 14px;
  background-color: #ffffff;
  line-height: 40px;
}
.musicItem img {
  height: 100%;
  width: 50px;
  float: left;
}
.musicItem div {
  float: left;
  margin-left: 10px;
}
.musicItem div:nth-child(3) {
  font-size: 13px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}
/* 排行榜 */
.find_top {
  margin-top: 30px;
  height: 260px;
  width: 100%;
}
.find_top .topHeader {
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding-left: 15px;
  font-size: 17px;
  margin-top: 10px;
}
.find_top_nav {
  display: inline-block;
  position: absolute;
  height: 200px;
  width: 92%;
  margin-left: 50%;
  transform: translateX(-50%);
  /* background-color: red; */
  background-color: #faf8f8;
  /* background-color: #ffffff; */
  border-radius: 10px;
}
.find_top_nav_title {
  text-align: center;
  margin-top: 18px;
  font-size: 17px;
}
.find_top_nav_list ul li {
  margin-top: 10px;
}
.find_top_nav_list ul li img {
  height: 40px;
  width: 40px;
  margin-left: 15px;
  border-radius: 10px;
  vertical-align: middle;
}
.find_top_nav_list ul li span:nth-child(2) {
  margin-left: 10px;
}
.find_top_nav_list ul li span:nth-child(3) {
  margin-top: 10px;
  /* position: absolute; */
  width: 150px;
  height: 20px;
  margin-left: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
}
.find_top_nav_list ul li span:nth-child(4) {
  margin-left: 5px;
  font-size: 12px;
  color: #a09d9d;
}
.newMusci {
  z-index: -1;
}
/* 新碟上架 */
.newCd {
  height: 300px;
  width: 100%;
  margin-top: 20px;
}
.newCd_header {
  height: 40px;
  line-height: 40px;
}
.newCd_header {
  padding-left: 15px;
}
.newCd_header span {
  position: absolute;
  right: 0;
  margin-right: 15px;
  height: 15px;
  width: 40px;
  /*  */
  border: 1px solid rgb(90, 88, 88);
  font-size: 12px;
  border-radius: 10px;
  line-height: 15px;
  text-align: center;
  margin-top: 12px;
}
.newCd_Body {
  height: 180px;
  width: 92%;
  background-color: #faf8f8;

  margin-left: 4%;
  border-radius: 10px;
}
.newCd_Body ul li {
  margin-top: 10px;
}
.newCd_Body ul li img {
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-left: 15px;
  margin-top: 10px;
  vertical-align: middle;
}
.newCd_Body ul li span {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 15px;
}
.newCd_Body ul li span:nth-child(3) {
  margin-top: 10px;
  font-size: 12px;
  margin-left: 15px;
}
</style>