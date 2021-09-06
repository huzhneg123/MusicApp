<template>
  <div class="allMv">
    <div class="allMv_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span>全部MV</span>
    </div>
    <div class="allMv_header_zhan"></div>

    <van-tabs animated>
      <van-tab :title="'内地 '">
        <AllMvCps :getMvs="getMvs"></AllMvCps>
      </van-tab>
      <van-tab :title="'港台 '">
        <AllMvCps :getMvs="getMvGang"></AllMvCps>
      </van-tab>
      <van-tab :title="'日本 '">
        <AllMvCps :getMvs="getMvJP"></AllMvCps>
      </van-tab>
      <van-tab :title="'欧美 '">
        <AllMvCps :getMvs="getMvUSA"></AllMvCps>
      </van-tab>

      <van-tab :title="'韩国 '">
        <AllMvCps :getMvs="getMvSK"></AllMvCps>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import AllMvCps from "@/components/allMvCps/AllMvCps";
import { getAllMv } from "../../api/axios";
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      // 内地
      getAllMvList: [],
      //   港台
      getAllMvGangList: [],
      //   日本
      getAllMvJPList: [],
      //   欧美
      getAllUSAList: [],
      //   韩国
      getALlSKList: []
    };
  },
  async mounted() {
    //   内地
    let getAllMvData = await getAllMv(10, "内地");
    this.getAllMvList = getAllMvData.data;
    // 港台
    let getAllMvGangData = await getAllMv(10, "港台");
    this.getAllMvGangList = getAllMvGangData.data;
    //日本
    let getAllMvJPData = await getAllMv(10, "日本");
    this.getAllMvJPList = getAllMvJPData.data;
    // console.log(this.getAllMvGangList);
    // 欧美
    let getAllUSAData = await getAllMv(10, "欧美");
    this.getAllUSAList = getAllUSAData.data;
    // 韩国
    let getALlSKData = await getAllMv(10, "韩国");
    this.getALlSKList = getALlSKData.data;

    // console.log(this.getAllUSAList);
  },

  components: {
    AllMvCps
  },
  computed: {
    getMvs() {
      return this.getAllMvList;
    },
    getMvGang() {
      return this.getAllMvGangList;
    },
    getMvJP() {
      return this.getAllMvJPList;
    },
    getMvUSA() {
      return this.getAllUSAList;
    },
    getMvSK() {
      return this.getALlSKList;
    }
  }
};
</script>

<style >
.allMv_header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  background-color: #ffffff;
  z-index: 1;
}
.allMv_header_zhan {
  height: 50px;
}
.allMv_header span:nth-child(1) {
  position: absolute;
  font-size: 28px;
  margin-left: 15px;
}
.allMv_header span:nth-child(2) {
  position: absolute;
  display: inline-block;
  margin-left: 50%;
  font-size: 20px;
  height: 50px;
  transform: translateX(-50%);
}
.van-tabs__nav .van-tabs__line {
  background-color: red;
  z-index: 0;
}
.van-tabs .tab {
  background-color: red;
}
</style>