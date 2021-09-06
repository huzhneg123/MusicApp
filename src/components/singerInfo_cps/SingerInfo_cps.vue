<template>
  <div class="singerInfo">
    <div class="singerInfo_header">
      <i class="iconfont icon-zuo" @click="$router.back()"></i>
      <span class="title" v-html="title"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {}
};
</script>

<style scoped>
.singerInfo_header {
  z-index: 2;
  position: fixed;
  height: 40px;
  width: 100%;
}
.singerInfo_header .icon-zuo {
  font-size: 29px;
  line-height: 40px;
  margin-left: 10px;
  color: #ffffff;
}
.singerInfo_header .title {
  display: inline-block;
  color: #ffffff;
  font-size: 17px;
}
.bac_img {
  height: 200px;
  width: 100%;
}
</style>