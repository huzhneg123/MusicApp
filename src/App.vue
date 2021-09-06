<template>
  <div class="app">
    <Program />
    <transition name="n">
      <router-view />
    </transition>
    <FooterGuide />
    <!-- 音乐播放器页面，交给vue全局管理 -->
  </div>
</template>

<script>
import Program from "@/components/Program";
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    FooterGuide,
    Program
  }
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.n-enter {
  transform: translateX(100%);
}
.n-enter-to {
  transform: translateX(0);
}
.n-enter-active {
  transition: all 0.4s;
}

.n-leave {
  transform: translateX(0);
}
.n-leave-to {
  transform: translateX(-100%);
}
.n-leave-active {
  /* transition: all 0.5s; */
}
</style>