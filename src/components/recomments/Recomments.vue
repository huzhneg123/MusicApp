<template>
  <div>
    <div class="playKsong_commons">
      <div class="playMusic_commons_header">
        <i class="iconfont icon-zuo" @click="none"></i>
        <i>评论</i>
      </div>
      <div class="playMusic_commons_flexd"></div>
      <!-- <Scroll class="scroll"> -->
      <div class="playMusic_commons_songInfo">
        <img src="../../common/img/lub.png" />
        <span>
          <h5>标题</h5>
          <h5>标题</h5>
        </span>
      </div>
      <div class="fenge"></div>
      <div class="playKsong_commons_title">
        <span>评论区</span>
        <span>全部</span>
        <span>最热</span>
      </div>
      <ul class="playKsong_commons_ul">
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
        <li>
          <div class="playMusic_commons_li">
            <img src="../../common/img/lub.png" />
            <span>
              <h5>名字</h5>
              <h5>123</h5>
            </span>
            <span class="iconfont icon-dianzan"></span>
          </div>
          <p>你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</p>
        </li>
      </ul>
      <!-- </Scroll> -->
    </div>
  </div>
</template>

<script>
// import Scroll from "@/common/Scroll";
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  props: {},
  data() {
    return {
      show2: this.show
    };
  },
  mounted() {},
  methods: {
    none() {
      this.$emit("changeShow", false);
    }
  },
  components: {
    // Scroll
  }
};
</script>

<style >
.playKsong_commons {
  /* position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #ffffff;
  width: 100%;
  height: 100%; */
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f0efef;
  z-index: 999;
}

/* .playMusic_commons_songInfo {
  display: flex;
}
.playMusic_commons_songInfo img {
  height: 55px;
  width: 55px;
  border-radius: 0;
}
.playMusic_commons_songInfo span {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
}
.fenge {
  width: 100%;
  height: 6px;
  background-color: rgb(245, 242, 242);
  margin-top: 15px;
}
.playKsong_commons_title {
  margin-top: 15px;
}
.playKsong_commons_title span:nth-child(1) {
  margin-left: 15px;
}
.playKsong_commons_title span:nth-child(2) {
  font-size: 14px;
  position: absolute;
  right: 0;
  margin-right: 70px;
}
.playKsong_commons_title span:nth-child(3) {
  font-size: 14px;

  position: absolute;
  right: 0;
  margin-right: 15px;
}
ul {
  margin-top: 15px;
}
.playKsong_commons_ul li {
  margin-bottom: 15px;
}
.playMusic_commons_li {
  display: flex;
  position: relative;
  margin-bottom: 15px;
}
.playMusic_commons_li span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}
.playMusic_commons_li span:nth-child(3) {
  position: absolute;
  right: 0;
  margin-right: 15px;
  margin-top: 6px;
}
.playMusic_commons_li span h5:nth-child(1) {
  font-size: 14px;
  color: rgb(115, 110, 110);
}
.playMusic_commons_li span h5:nth-child(2) {
  font-size: 12px;
  color: rgb(115, 110, 110);
}
.playMusic_commons_li img {
  height: 30px;
  width: 30px;
  margin-left: 15px;
}
ul li p {
  margin-left: 60px;
  font-size: 14px;
  letter-spacing: 2px;
} */
</style>