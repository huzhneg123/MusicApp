<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon iconfont icon-jinggao">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    alertText: String
  },
  methods: {
    closeTip() {
      this.$emit("closeTip");
    }
  }
};
</script>

<style>
.icon-jinggao {
  position: absolute;
  color: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);

  font-size: 60px;
}
.tip_text_container {
  margin-top: -350px;
  margin-left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: 130px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  z-index: 1000;
}
.tip_text {
  padding-top: 60px;
  font-size: 13px;
  text-align: center;
  color: #ffffff;
}
.confrim {
  text-align: center;
  height: 30px;
  width: 100%;
  background-color: rgb(132, 138, 138);
  line-height: 30px;
  color: #ffffff;
}
</style>