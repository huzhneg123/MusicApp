<template>
  <section>
    <LeftNav class="q" />
    <div class="DjRouter">
      <router-link to="/ksong/ksongMainPage" replace>
        <span :class="{red:'/ksong/ksongMainPage'===$route.path}">主页</span>
      </router-link>
      <router-link to="/ksong/ksongTopPage" replace>
        <span :class="{red:'/ksong/ksongTopPage'===$route.path}">榜单</span>
      </router-link>

      <router-link to="/ksong/ksongTypePage" replace>
        <!-- <span :class="fenglei" @click="fen">分类</span> -->
        <span :class="{red:'/ksong/ksongTypePage'===$route.path}">分类</span>
      </router-link>
    </div>
    <div class="DjRouter_zhan"></div>
    <router-view></router-view>
  </section>
</template>

<script>
import LeftNav from "@/components/LeftNav/LeftNav";
export default {
  data() {
    return {};
  },
  components: {
    LeftNav
  },
  methods: {}
};
</script>

<style >
.red {
  color: red;
}
.DjRouter span:nth-child(1) {
  margin-left: 10px;
}
.DjRouter .icon-ai-arrow-down {
  color: black;
  margin-left: 10px;
  left: 0;
  position: absolute;
  font-size: 20px;
  line-height: 35px;
}

.DjRouter_zhan {
  height: 60px;
}
.ksong-enter {
  transform: translateX(100%);
}
.ksong-enter-to {
  transform: translateX(0);
}
.ksong-enter-active {
  transition: all 0.4s;
}
.ksong-leave {
  transform: translateX(0);
}
.ksong-leave-to {
  transform: translateX(-100%);
}
.ksong-leave-active {
  /* transition: all 0.5s; */
}
</style>