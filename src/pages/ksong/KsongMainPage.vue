<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in diantaiBannerList" :key="index" class="pic">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
    <div class="newMusci">
      <div class="newMusci_header">
        <span>最热电台</span>
        <span>更多></span>
      </div>
      <div class="newMusic_lunbo">
        <span v-for="item in hotDJ" :key="item.id" @click="toPath(item.id)">
          <img :src="item.picUrl" />
          <p>{{item.name}}</p>
        </span>
      </div>
    </div>
    <div class="newMusci">
      <div class="newMusci_header">
        <span>付费精品</span>
        <span>更多></span>
      </div>
      <div class="newMusic_lunbo">
        <span v-for="item in payDjList" :key="item.id" @click="toPath2(item.id)">
          <img :src="item.picUrl" />
          <p>{{item.name}}</p>
        </span>
      </div>
    </div>
    <div class="showOfHeader">
      <span class="show" @click="show" :class="isShow">24小时节目榜</span>
      <span class="zhubo" @click="zhubo" :class="isZhubo">24小时主播榜</span>
    </div>
    <div class="showTop" :class="show_none">
      <div
        v-for="(item,index) in showOfHoursListArr"
        :key="item.id"
        @click="selectItem(item,index)"
      >
        <img v-lazy="item.coverUrl" />
        <h5 class="ellipsis">{{item.name}}</h5>
      </div>
    </div>
    <div class="showTop" :class="zhubo_none">
      <div v-for="item in zhuboOfHoursList " :key="item.id">
        <img :src="item.avatarUrl" />
        <h5 class="ellipsis">{{item.nickName}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// 引入van
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

import Vue from "vue";

import ajax from "@/api/ajax";

// 下载swiper引入
import Swiper from "swiper";
import "swiper/swiper.min.css";
export default {
  data() {
    return {
      diantaiBannerList: [],
      hotDJ: [],
      payDjList: [],
      // isShow: false
      isShow: "show_xiahuaxian",
      isZhubo: "",
      showOfHoursList: [],
      show_none: "",
      zhubo_none: "show_yin",
      zhuboOfHoursList: [],
      showOfHoursListArr: []
    };
  },
  methods: {
    selectItem(item, index) {
      this.selectPlay({
        list: this.showOfHoursListArr,
        index
      });
    },
    ...mapActions(["selectPlay"]),

    toPath(item) {
      this.$router.push({
        path: "/ksongDjList",
        query: {
          // DjId: JSON.stringify(item)
          DjId: item
        }
      });
    },
    toPath2(item) {
      this.$router.push({
        path: "/ksongDjList",
        query: {
          // DjId: JSON.stringify(item)
          DjId: item
        }
      });
    },
    show() {
      this.isShow = "show_xiahuaxian";
      this.isZhubo = "";
      this.show_none = "show_xian";
      this.zhubo_none = "show_yin";
    },
    zhubo() {
      this.isZhubo = "show_xiahuaxian";
      this.isShow = "";
      this.show_none = "show_yin";
      this.zhubo_none = "show_xian";
    }
  },
  async mounted() {
    // 电台轮播图
    let dJBanner = await ajax("http://localhost:3000/dj/banner");
    this.diantaiBannerList = dJBanner.data;
    // 电台
    let hotDJ = await ajax("http://localhost:3000/dj/hot");
    this.hotDJ = hotDJ.djRadios.slice(0, 6);
    // 付费精品
    let payDJ = await ajax("http://localhost:3000/dj/toplist/pay");
    this.payDjList = payDJ.data.list.splice(0, 10);

    // 24小时节目榜单

    let showOfHours = await ajax(
      "http://localhost:3000/dj/program/toplist/hours"
    );
    this.showOfHoursList = showOfHours.data.list.splice(0, 6);
    let b = showOfHours.data.list.splice(0, 6);

    let arr = [];
    b.forEach(function(v) {
      arr.push(v.program);
    });
    this.showOfHoursListArr = arr;
    console.log(arr);

    console.log(this.showOfHoursList);

    // 24小时主播榜单
    let zhuboOfHours = await ajax("http://localhost:3000/dj/toplist/hours");
    this.zhuboOfHoursList = zhuboOfHours.data.list.splice(0, 6);

    // 创建swiper实例
    new Swiper(".swiper-container", {
      // 循环轮播
      // loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {}
};
</script>

<style>
.q {
  z-index: 3;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.show_xian {
  display: block;
}
section {
  background-color: #ffffff;
}
.showOfHeader {
  height: 40px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
}
.showOfHeader .show {
  font-size: 20px;
  line-height: 40px;
}
.showOfHeader .zhubo {
  font-size: 20px;
  line-height: 40px;
}
.show_xiahuaxian {
  border-bottom: 3px solid red;
}
.showTop {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}
.showTop div {
  height: 150px;
  width: 40%;
  margin-top: 10px;
  border-radius: 15px;
}
.showTop div img {
  width: 100%;
  height: 120px;
  border-radius: 15px;
}
.showTop div h5 {
  margin-top: 2px;
  font-size: 12px;
}

.ziduo {
  height: 60px;
  width: 100%;
  background-color: #ffffff;
}
.show_yin {
  display: none;
}
/* 电台 */

.DjRouter {
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 1;
  line-height: 50px;
  text-align: center;
}
.DjRouter_zhan {
  height: 50px;
}
.DjRouter span:nth-child(1) {
  padding-right: 15px;
}
.DjRouter span:nth-child(3) {
  padding-left: 15px;
}
</style>