<template>
  <div>
    <div class="pop">
      <div class="pop_body">{{text}}</div>
      <div class="pop_foot">
        <span @click="quXiao">取消</span>
        <span @click="clearHistory">清空</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    clearHistory() {
      this.clearSearchHistory();
      this.$emit("qingkong", false);
    },
    quXiao() {
      this.$emit("quxiao", false);
    },
    ...mapActions(["clearSearchHistory"])
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.pop {
  position: absolute;
  height: 80px;
  width: 270px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -280px;
  border-radius: 10px;
  background-color: #fafafa;
}
.pop div:nth-child(1) {
  font-size: 13px;
}
.pop_body {
  height: 45px;
  width: 100%;
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid rgb(238, 232, 232);
}
.pop_foot {
  display: flex;
  justify-content: center;
}
.pop_foot span {
  height: 35px;
  width: 135px;
  line-height: 35px;
  text-align: center;
}
.pop_foot span:nth-child(1) {
  color: blue;
  border-right: 1px solid rgb(238, 232, 232);
}
.pop_foot span:nth-child(2) {
  color: red;
}
</style>