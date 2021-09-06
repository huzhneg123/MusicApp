<template>
  <div>
    <div class="page_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>

      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style >
.page_header {
  z-index: 2;
  font-size: 18px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  background-color: #ffffff;
  position: fixed;
}

.page_header .icon-zuo {
  position: absolute;
  left: 0;
  margin-left: 10px;
  font-size: 23px;
  position: absolute;
}
.page_header span:nth-child(2) {
  width: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  position: absolute;
  text-align: center;
}
</style>