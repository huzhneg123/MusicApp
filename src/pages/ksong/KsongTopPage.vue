<template>
  <div>
    <!-- 情感 -->
    <div class="tuiJian_body">
      <div class="tuiJian_body_header">
        <span>今日优选</span>
        <span>更多</span>
      </div>
      <div class="tuiJian_body_img">
        <span v-for="item in getDjGoodTodyList" :key="item.id" @click="toPath(item.id)">
          <img :src="item.picUrl" />
          <h2>{{item.name}}</h2>
        </span>
      </div>
    </div>
    <!-- 推荐电台 -->
    <div class="tuiJian_body">
      <div class="tuiJian_body_header">
        <span>精选电台-谈情说爱</span>
        <span>更多</span>
      </div>
      <div class="tuiJian_body_img">
        <span v-for="item in getTuiJianDjList" :key="item.id" @click="toPath2(item.id)">
          <img :src="item.picUrl" />
          <h2>{{item.name}}</h2>
        </span>
      </div>
    </div>

    <!-- 付费精选 -->
    <div class="tuiJian_body">
      <div class="tuiJian_body_header">
        <span>付费精选</span>
        <span>更多</span>
      </div>
      <div class="tuiJian_body_img">
        <span v-for="item in getPayForList" :key="item.id" @click="toPath3(item.id)">
          <img :src="item.picUrl" />
          <h2>{{item.name}}</h2>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getDjGoodTody } from "../../api/axios";
import { getTuiJianDj } from "../../api/axios";
import { getPayFor } from "../../api/axios";
export default {
  data() {
    return {
      getDjGoodTodyList: [],
      getTuiJianDjList: [],
      getPayForList: []
    };
  },
  async mounted() {
    let getDjGoodTodyData = await getDjGoodTody();
    this.getDjGoodTodyList = getDjGoodTodyData.data;

    let getTuiJianDjData = await getTuiJianDj();
    this.getTuiJianDjList = getTuiJianDjData.djRadios.slice(0, 6);

    let getPayForData = await getPayFor(6);
    this.getPayForList = getPayForData.data.list;
  },
  methods: {
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
    toPath3(item) {
      this.$router.push({
        path: "/ksongDjList",
        query: {
          // DjId: JSON.stringify(item)
          DjId: item
        }
      });
    }
  }
};
</script>

<style >
.tuiJian_body {
  /* height: 300px; */
  width: 100%;
  margin-top: 15px;
}
.tuiJian_body_header {
  height: 50px;
}
.tuiJian_body_header span:nth-child(1) {
  display: inline-block;
  margin-top: 12px;
  margin-left: 25px;
}
.tuiJian_body_header span:nth-child(2) {
  position: absolute;
  right: 0;
  margin-right: 25px;
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
.tuiJian_body_img {
  /* margin-top: 10px; */
  width: 92%;
  /* height: 250px; */
  margin-left: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tuiJian_body_img span {
  margin-bottom: 30px;
}

.tuiJian_body_img span img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.tuiJian_body_img span h2 {
  font-size: 12px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>