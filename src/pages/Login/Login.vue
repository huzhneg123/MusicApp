<template>
  <div class="backGroud_g">
    <div class="backGroud">
      <!-- 密码登录 -->
      <div class="iconfont icon-cha" @click="$router.back()"></div>
      <div class="icon">
        <span class="iconfont icon-denglu"></span>
      </div>
      <div class="input">
        <input type="text" placeholder="手机号" v-model="phone" />
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <button class="denglu" @click="login">登录</button>
      <h2 class="forget">忘记密码？</h2>
      <p>登录即同意《服务条款》《隐私政策》《儿童隐私政策》《中国移动认证服务协议》</p>

      <!-- 提示框 -->
      <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip" />

      <!-- 验证码登录 -->
      <div class="yanZhengMa">
        <!-- {{phoneNumber}} -->
        <!-- <i class="iconfont icon-xiugai07" @click="yanzhengPage"></i> -->
      </div>
    </div>
    <transition name="yan">
      <div :class="no" class="yZPage">
        <ChildpageHeader title="手机号登录"></ChildpageHeader>

        <h2>登录体验更多精彩</h2>
        <h2>未注册手机号登录后将自动创建账号</h2>
        <div class="inputPhone">
          <span>+86</span>
          <input type="text" placeholder="请输入手机号" v-model="phone" />
        </div>
        <!-- <div class="inputPhone">
          <span>+86</span>
          <input type="text" placeholder="请输入手机号" v-model="phone" />
        </div>-->
        <div class="next" @click="nextYB(phone)">下一步</div>
      </div>
    </transition>
  </div>
</template>

<script>
// 引入ajax
// import ajax from "@/api/ajax";
import { login } from "../../api/axios";

import AlertTip from "@/components/AlertTip/AlertTip";
import ChildpageHeader from "@/components/childPageHeader/ChildpageHeader";
export default {
  data() {
    return {
      phone: "",
      email: "",
      password: "",
      showAlert: false,
      alertText: "",
      // phoneNumber: 15557457532,
      no: ""
    };
  },
  mounted() {},
  computed: {},

  methods: {
    nextYB(phone) {
      if (!this.phone) {
        this.showAlert = true;
        this.alertText = "请输入手机号!";
        return;
      }
      const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!phoneReg.test(this.phone)) {
        this.showAlert = true;
        this.alertText = "手机号格式不正确!";
        return;
      }
      this.$router.push({
        path: "/longinCode",
        query: {
          phones: phone
        }
      });
    },
    yanzhengPage() {
      this.no = "yanZhengMa_page";
    },
    async login() {
      let phone = this.phone;
      let password = this.password;

      if (!phone) {
        this.showAlert = true;
        this.alertText = "请输入手机号!";
        return;
      }
      const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!phoneReg.test(phone)) {
        this.showAlert = true;
        this.alertText = "手机号格式不正确!";
        return;
      }
      if (!password) {
        this.showAlert = true;
        this.alertText = "请输入密码!";
        return;
      }
      // 获取用户信息请求
      let userInfo = await login(phone, password);
      if (userInfo.data.code === 200) {
        console.log(userInfo);
        //本地存储,穿进去是个json格式，读取的时候必须要反编译
        localStorage.setItem("userInfo", JSON.stringify(userInfo.data.profile));
        // .data.profile
        this.$router.replace("/mine");
      } else if (userInfo.data.code === 400) {
        this.showAlert = true;
        this.alertText = "密码错误!";
      } else if (userInfo.data.code === 501) {
        this.showAlert = true;
        this.alertText = "账号错误";
      } else {
        this.showAlert = true;
        this.alertText = "登录失败，请重新登录!";
      }
    },

    // 提示框
    closeTip() {
      this.showAlert = false;
    }
  },
  components: {
    ChildpageHeader,

    AlertTip
  }
};
</script>

<style scoped>
.backGroud_g {
  height: 100%;
}
.tipyi {
  display: none;
}
.tipxian {
  display: block;
}
.backGroud {
  width: 100%;
  height: 100%;
  background-color: #d93a27;
  position: absolute;
}
.icon-cha {
  font-size: 20px;
  margin-top: 5px;
  margin-left: 5px;
  color: #ffffff;
  position: absolute;
}

.icon {
  position: absolute;
  height: 60px;
  width: 60px;
  background-color: #f23a30;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 180px;
  border-radius: 30px;
}
.icon-denglu {
  font-size: 50px;
  color: #ffffff;
  font-weight: 900;
  line-height: 60px;
  margin-left: 6px;
}
.input {
  height: 60px;
  width: 180px;
  position: absolute;
  margin-top: 370px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.input input {
  height: 50%;
  width: 100%;
  margin-bottom: 5px;
  border-radius: 3px;
  font-size: 12px;
  border: 0;
}
.denglu {
  position: absolute;
  height: 40px;
  width: 240px;
  background-color: #ffffff;
  color: red;
  margin-top: 460px;
  margin-left: 50%;
  text-align: center;
  transform: translateX(-50%);
  border-radius: 5px;
  line-height: 30px;
  font-weight: 900;
  font-size: 18px;
  border: 0;
}
.forget {
  display: inline-block;
  padding-top: 545px;
  font-size: 12px;
  color: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -30px;
}

p {
  padding-top: 20px;
  width: 300px;
  height: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 12px;
  color: #e6e3e3;
}
/* 验证码登录 */
.yanZhengMa {
  position: absolute;
  margin-top: -255px;
  margin-left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
}
.yanZhengMa i {
  margin-left: 5px;
}
.yanZhengMa_page {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: #f1f1f1;
  transition: all 0.3s;
}
.yZPage h2:nth-child(2) {
  margin-top: 20px;
  font-weight: 900;
  margin-left: 15px;
  font-size: 17px;
}
.yZPage h2:nth-child(3) {
  margin-top: 10px;
  margin-left: 15px;
  font-size: 13px;
  color: rgb(83, 80, 80);
}
.yZPage .inputPhone {
  height: 40px;
  width: 100%;
  margin-top: 15px;
  /* position: relative; */
}
.inputPhone span {
  display: inline-block;
  height: 100%;
  margin-left: 15px;
  line-height: 40px;
  font-size: 20px;
}
.inputPhone input {
  height: 100%;
  line-height: 40px;
  /* position: absolute; */
  width: 80%;
  background-color: #f1f1f1;
  padding-left: 15px;
}
.yZPage .next {
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