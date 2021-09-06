<template>
  <div class="typeTuijian">
    <div class="typeTuijian_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span v-for="item in getTypeTileList" :key="item.id">{{item.category}}</span>
    </div>
    <div class="typeTuijian_header_zhan"></div>
    <div class="typeTuijian_body">
      <div class="typeTuijian_body_header">
        <span>精选播客</span>
        <span @click="$router.push('/ksongGround')">更多</span>
      </div>
      <div class="typeTuijian_body_img">
        <span v-for="item in getTypeTuijianList" :key="item.id" @click="toPath(item.id)">
          <img :src="item.picUrl" />
          <h2>{{item.name}}</h2>
        </span>
      </div>
    </div>
    <!-- 故事 -->
    <div class="typeTuijian_body">
      <div class="typeTuijian_body_header">
        <span>情感故事</span>
        <span @click="$router.push('/ksongGround')">更多</span>
      </div>
      <div class="typeTuijian_body_img">
        <span v-for="item in getTypeStory" :key="item.id" @click="toPath(item.id)">
          <img :src="item.picUrl" />
          <h2>{{item.name}}</h2>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getTypeTuijian } from "../../api/axios";
export default {
  data() {
    return {
      typeId: JSON.parse(this.$route.query.typeId),
      getTypeTuijianList: [],
      getTypeTileList: [],
      getTypeStory: []
    };
  },
  async mounted() {
    let getTypeTuijianData = await getTypeTuijian(this.typeId);
    this.getTypeTuijianList = getTypeTuijianData.djRadios.slice(0, 6);
    this.getTypeTileList = this.getTypeTuijianList.slice(0, 1);

    this.getTypeStory = getTypeTuijianData.djRadios.slice(6, 15);
    console.log(this.getTypeStory);
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
    }
  }
};
</script>

<style scoped>
.typeTuijian {
  /* background-color: rgb(243, 243, 243); */
  width: 100%;
  height: 100%;
}
.typeTuijian_header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  background-color: #ffffff;
  z-index: 2;
}
.typeTuijian_header_zhan {
  height: 50px;
}
.typeTuijian_header span:nth-child(1) {
  font-size: 28px;
  margin-left: 15px;
  position: absolute;
}
.typeTuijian_header span:nth-child(2) {
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 19px;
}
.typeTuijian_body {
  height: 330px;
  width: 100%;
}
.typeTuijian_body_header {
  height: 30px;
}
.typeTuijian_body_header span:nth-child(1) {
  display: inline-block;
  margin-top: 12px;
  margin-left: 15px;
}
.typeTuijian_body_header span:nth-child(2) {
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
.typeTuijian_body_img {
  margin-top: 10px;
  width: 92%;
  height: 250px;
  margin-left: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.typeTuijian_body_img span {
  margin-bottom: 30px;
}

.typeTuijian_body_img span img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
.typeTuijian_body_img span h2 {
  font-size: 12px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
