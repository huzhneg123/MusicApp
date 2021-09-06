<template>
  <div class="watchc">
    <!-- <router-link to="/watch/watchs">关注</router-link>
    <router-link to="/watch/fance">粉丝</router-link>-->

    <div class="watch_header">
      <span class="iconfont icon-cha" @click="$router.back()"></span>
      <router-link to="/watch/watchs" class="watch_header_watch" replace>
        <span @click="watch" :class="xia">关注</span>
      </router-link>
      <router-link to="/watch/fance" class="watch_header_fance" replace>
        <span @click="fence" :class="f_xia">粉丝</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xia: "watch_header_xiahuaxian",
      f_xia: ""
    };
  },
  methods: {
    watch() {
      this.xia = "watch_header_xiahuaxian";
      this.f_xia = "w";
    },
    fence() {
      this.f_xia = "watch_header_xiahuaxian";
      this.xia = "";
    }
  }
};
</script>

<style >
.watch_header {
  text-align: center;
  width: 100%;
  line-height: 40px;
  font-size: 20px;
}
.watch_header .icon-cha {
  position: absolute;
  left: 0;
  margin-left: 10px;
  font-size: 18px;
}

.watch_header_watch {
  margin-right: 40px;
}

.watch_header_xiahuaxian {
  border-bottom: 3px solid red;
}
</style>