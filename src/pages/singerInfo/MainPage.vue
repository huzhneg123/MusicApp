<template>
  <div class="singerInfo_mian">
    <div class="better_s" ref="wrapper">
      <div>
        <div class="singerInfo_mian_yun">
          <div class="mycloud_circle">我的云圈</div>
          <img class="mycloud_circle_img" :src="singer.img1v1Url" />
          <span class="mycloud_circle_text">{{singer.name}}的云圈</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="singerInfo_mian_mass">
          <h5>艺人百科</h5>
          <div class="singerInfo_mian_mass_title">
            <span>
              <h5>2</h5>
              <h5>话语榜排名</h5>
            </span>
            <span>
              <h5>2</h5>
              <h5>云圈阅读量</h5>
            </span>
          </div>
          <div class="singerInfo_mian_jieshao">
            <h2>艺人名：{{singer.name}}</h2>
            <h2>性别：</h2>
            <h2>生日：</h2>
            <h2>国家/地区：</h2>
            <h2>学校:</h2>
            <p>歌手简介：{{getSingerDescList.briefDesc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import { mapGetters } from "vuex";

import { getSingerDesc } from "../../api/axios";

export default {
  data() {
    return {
      getSingerDescList: {}
    };
  },
  computed: {
    ...mapGetters(["singer"])
  },
  async mounted() {
    let getSingerDescData = await getSingerDesc(this.singer.id);
    this.getSingerDescList = getSingerDescData;
    console.log(getSingerDescData);

    //创建betterScroll实例
    this.scroller = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      click: true,
      pullUpLoad: true,
      // 下拉加载
      pullDownRefresh: {
        threshold: 100,
        stop: 50
      }
      // 上拉加载
      // pullUpLoad: {
      //   threshold: 100
      // }
    });
  },
  methods: {}
};
</script>

<style scoped>
.singerInfo_mian {
  width: 100%;
  height: 290px;
  background-color: rgb(245, 245, 245);
  overflow-y: scroll;
}
.singerInfo_mian_yun {
  height: 100px;
  width: 90%;
  background-color: rgb(251, 251, 251);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  border-radius: 10px;
}
.mycloud_circle {
  display: inline-block;
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
}
.mycloud_circle_img {
  margin-top: 10px;

  height: 50px;
  width: 50px;
  margin-left: 10px;
  border-radius: 25px;
  vertical-align: middle;
}
.mycloud_circle_text {
  margin-left: 10px;
}

.singerInfo_mian_yun .icon-jiantou {
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 16px;
}
.singerInfo_mian_mass {
  width: 90%;
  background-color: rgb(251, 251, 251);
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 15px;
  border-radius: 10px;
}
.singerInfo_mian_mass h5 {
  display: inline-block;
  margin: 10px;
}
.singerInfo_mian_mass_title {
  display: flex;

  height: 55px;
  width: 100%;
  justify-content: space-around;
  border-bottom: 0.5px solid rgb(228, 228, 228);
}
.singerInfo_mian_mass_title span {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.singerInfo_mian_mass_title span h5:nth-child(2) {
  margin-top: -6px;
  font-size: 13px;
  color: rgb(105, 102, 102);
}
.singerInfo_mian_jieshao {
  width: 100%;
  height: 100%;
}
.singerInfo_mian_jieshao h2 {
  margin-left: 10px;
  padding-top: 10px;
  font-size: 13px;
  letter-spacing: 1px;
}
.singerInfo_mian_jieshao p {
  width: 90%;
  margin-left: 10px;
  padding-top: 10px;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 18px;

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.r-enter-active,
.r-leave-active {
  transition: all 0.3s;
}
.r-enter,
.r-leave-to {
  transform: translate3d(100%, 0, 0);
}
.singerInfo_mian_more {
  margin-top: 10px;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>