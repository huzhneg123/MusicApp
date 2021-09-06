<template>
  <div class="header">
    <div class="left iconfont icon-nav"></div>
    <!-- <a>
      <div class="middle">
        <span class="iconfont icon-icon-system-search"></span>
        <span>大家都在听 声控助眠</span>
      </div>
    </a>-->
    <slot name="s1"></slot>
    <slot name="s2"></slot>
    <!-- <span class="right iconfont icon-maikefeng"></span> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  position: relative;
  height: 60px;
  width: 100%;
  background-color: #e5e1e2;
}
.left {
  position: absolute;
  font-size: 28px;
  font-weight: 600;
  line-height: 60px;
  width: 30px;
  left: 0;
  margin-left: 5px;
}
.middle {
  position: absolute;
  height: 30px;
  left: 50px;
  right: 50px;
  margin-top: 15px;
  background-color: #fafafa;
  border-radius: 25px;
}
.middle span {
  position: absolute;
  margin-left: 50px;
  font-size: 20px;
  color: #c8c8c8;
  line-height: 30px;
}
.middle span:last-child {
  font-size: 14px;
  margin-left: 70px;
  line-height: 30px;
  color: #c8c8c8;
}
.right {
  position: absolute;
  right: 0;
  font-size: 25px;
  line-height: 60px;
  margin-right: 5px;
}
</style>