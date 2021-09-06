<template>
  <div>
    <div class="recently_header">
      <span class="iconfont icon-cha" @click="$router.back()"></span>
      {{title}}
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

<style scoped>
.recently_header {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
}

.recently_header .icon-cha {
  position: absolute;
  left: 0;
  margin-left: 10px;
}
</style>