<template>
  <div class="AllNewCd">
    <div class="AllNewCd_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span>新碟</span>
    </div>
    <div class="better_s" ref="wrapper">
      <div>
        <div class="AllNewCd_header_zhan"></div>
        <div class="AllNewCd_body">
          <span v-for="item in getNewCdList" :key="item.id" @click="toPath(item)">
            <img :src="item.picUrl" />
            <h5>{{item.name}}</h5>
            <h5>{{item.artist.name}}</h5>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import { getNewCd } from "../../api/axios";

export default {
  data() {
    return {
      getNewCdList: []
    };
  },
  async mounted() {
    // 新碟上架
    let getNewCdData = await getNewCd(60, "JP");
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
  },
  methods: {
    toPath(item) {
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

<style scoped>
.AllNewCd_header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
}
.AllNewCd_header_zhan {
  height: 50px;
}
.AllNewCd_header span:nth-child(1) {
  position: absolute;
  font-size: 28px;
  margin-left: 15px;
}
.AllNewCd_header span:nth-child(2) {
  position: absolute;
  display: inline-block;
  margin-left: 50%;
  font-size: 20px;
  height: 50px;
  transform: translateX(-50%);
}
.AllNewCd_body {
  margin-top: 15px;
  display: flex;
  flex-flow: wrap;
}
.AllNewCd_body span {
  margin-left: 15px;
  margin-bottom: 30px;
}
.AllNewCd_body span img {
  width: 165px;
  height: 130px;
}
.AllNewCd_body span h5:nth-child(2) {
  width: 165px;
  margin-top: 2px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.AllNewCd_body span h5:nth-child(3) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 165px;
  margin-top: 2px;
  font-size: 12px;
  color: rgb(93, 89, 89);
}
</style>