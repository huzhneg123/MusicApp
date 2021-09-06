<template>
  <!-- $route.meta.showFoot 控制路由组件是否显示 -->
  <div class="footer" v-show="$route.meta.showFoot">
    <span :class="{co:'/find'===$route.path}" @click="goto('/find')">
      <span class="item">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
      </span>
    </span>
    <span :class="{co:'/podcast'===$route.path}" @click="goto('/podcast')">
      <span class="item">
        <i class="iconfont icon-boke"></i>
        <span>播客</span>
      </span>
    </span>

    <span :class="{co:'/mine'===$route.path}" @click="goto('/mine')">
      <span class="item">
        <i class="iconfont icon-yinle"></i>
        <span>我的</span>
      </span>
    </span>

    <span :class="{co:'/ksong/ksongMainPage'===$route.path }" @click="goto('/ksong')">
      <span class="item">
        <i class="iconfont icon-Kge"></i>
        <span>k歌</span>
      </span>
    </span>

    <span :class="{co:'/cloud'===$route.path}" @click="goto('/cloud')">
      <span class="item">
        <i class="iconfont icon-duoren"></i>
        <span>云村</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style>
.footer {
  z-index: 1;
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item .iconfont {
  margin-bottom: 2px;
  font-size: 30px;
  border-radius: 20px;
}
.item span {
  font-size: 12px;
}
.co {
  color: #ff4637;
}
</style>