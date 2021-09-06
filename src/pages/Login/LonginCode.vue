<template>
  <div class="code">
    <ChildpageHeader title="手机号登录"></ChildpageHeader>

    <van-field v-model="code" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary" @click="send">发送验证码</van-button>
        <span>123</span>
      </template>
    </van-field>
    <div class="next" @click="deng">下一步</div>
  </div>
</template>

<script>
import { jiaoyan } from "../../api/axios";
import { sendMessage } from "../../api/axios";
import ChildpageHeader from "@/components/childPageHeader/ChildpageHeader";
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);
export default {
  data() {
    return {
      phones: this.$route.query.phones,
      code: ""
    };
  },
  async mounted() {
    // console.log(this.phones);
  },
  methods: {
    async send() {
      await sendMessage(this.phones);
    },
    async deng() {
      let jiaoyanData = await jiaoyan(this.phones, this.code);
      console.log(jiaoyanData);
    }
  },
  components: {
    ChildpageHeader
  }
};
</script>

<style scoped>
.code {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}
.van-field {
  margin-top: 20px;
  background-color: #f1f1f1;
}
.next {
  margin: 0 auto;
  height: 40px;
  width: 90%;
  background-color: red;
  color: #ffffff;
  margin-top: 40px;

  border: 0;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
}
</style>