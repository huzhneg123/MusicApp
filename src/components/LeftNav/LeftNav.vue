<template>
  <section>
    <div class="anniu" @click="leftNav"></div>
    <!-- 右侧遮罩层 -->
    <div class="hei" :class="heiying" @click="qwe"></div>

    <div class="container" :class="yangshi">
      <div class="people">
        <img :src="userInfoList.avatarUrl?userInfoList.avatarUrl:''" />
        <h1>{{userInfoList.avatarUrl?userInfoList.nickname:'未登录'}}</h1>
        <i class="iconfont icon-saoma"></i>
      </div>
      <!-- 黑胶会员充值 -->
      <div class="heijiao">
        <div class="vip">
          <span>开通黑胶VIP</span>
          <span>会员中心</span>
          <span>立享超17项专属特权</span>
          <span>受邀专享，黑胶VIP低至0.04元/天!</span>
          <span class="iconfont icon-yaoqing"></span>
        </div>
      </div>
      <!--信息 -->
      <div class="message">
        <div>
          <span class="iconfont icon-youjian"></span>
          <span>消息中心</span>
          <span>5</span>
          <span class="iconfont icon-jiantou"></span>
        </div>
        <div>
          <span class="iconfont icon-yun"></span>
          <span>云贝中心</span>
          <span>签到</span>
          <span class="iconfont icon-jiantou"></span>
        </div>
        <div>
          <span class="iconfont icon-dengpao"></span>
          <span>创作者中心</span>
          <span class="iconfont icon-jiantou"></span>
        </div>
      </div>
      <!-- 音乐服务 -->
      <div class="message music">
        <div>
          <span>音乐服务</span>
        </div>
        <div>
          <span class="iconfont icon-menpiao"></span>
          <span>演出</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-gouwu1"></span>
          <span>商城</span>
          <span>耳机0元购</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-lingdang"></span>
          <span>口袋彩铃</span>
          <span>听完就能能量满满</span>

          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-youxi"></span>
          <span>游戏专区</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
      </div>
      <!-- 其他 -->
      <div class="message other">
        <div>
          <span>其他</span>
        </div>
        <div>
          <span class="iconfont icon-shezhi1beifen"></span>
          <span>设置</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-yejianmoshi"></span>
          <span>夜间模式</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-shizhong"></span>
          <span>定时关闭</span>
          <span>5</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-gexingzhuangban"></span>
          <span>个性装扮</span>
          <span>签到</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-headphones-copy"></span>
          <span>边听边存</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-liuliang"></span>
          <span>在线听歌免流量</span>
          <span>5</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-add1"></span>
          <span>添加Siri捷径</span>
          <span>签到</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-heimingdan-"></span>
          <span>音乐黑名单</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-jiankangmoshi"></span>
          <span>青少年模式</span>
          <span>签到</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-shizhong"></span>
          <span>音乐闹钟</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
      </div>
      <!-- 关于 -->
      <div class="message guanyu">
        <div>
          <span class="iconfont icon-fuwudingdanxiangqing-kefu-copy-copy"></span>
          <span>我的客服</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-dd"></span>
          <span>我的订单</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-quanguanlibase_sales_couponManage"></span>
          <span>优惠券</span>
          <i class="iconfont icon-jiantou i"></i>
        </div>
        <div>
          <span class="iconfont icon-fenxiang1"></span>
          <span>分享网易云音乐</span>
          <span>签到</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
        <div>
          <span class="iconfont icon-zhuyi"></span>
          <span>关于</span>
          <span class="iconfont icon-jiantou i"></span>
        </div>
      </div>
      <div class="message login" @click="out">登录</div>
    </div>
  </section>
</template>

<script>
import { loginOut } from "../../api/axios";
export default {
  data() {
    return {
      yangshi: "yi",
      heiying: "yi",
      userInfoList: []
    };
  },
  mounted() {
    // 读取本地
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      // 反编译json
      this.userInfoList = JSON.parse(userInfo);
    }
  },
  methods: {
    leftNav() {
      this.yangshi = "xi";
      this.heiying = "xi";
    },
    qwe() {
      (this.yangshi = "yi"), (this.heiying = "yi");
    },
    async out() {
      let out = await loginOut();
      if (out.code === 200) {
        window.localStorage.removeItem("userInfo");
      }
    }
  }
};
</script>

<style >
.container {
  position: absolute;
  width: 85%;
  height: 700px;
  background-color: #e5e1e2;
  z-index: 4;
  overflow-y: scroll;
}
.people {
  position: fixed;
  height: 60px;
  width: 310px;
  background-color: #e5e1e2;
  z-index: 2;
}
.people img {
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-top: 15px;
  margin-left: 10px;
}
.people h1 {
  margin-left: 50px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 600;
}
.icon-saoma {
  position: absolute;
  font-size: 24px;
  margin-top: -40px;
  right: 0;
}
.heijiao {
  height: 100px;
  width: 300px;
  margin-left: 8px;
  background: -webkit-linear-gradient(rgba(112, 107, 107, 0), rgb(90, 86, 86));
  margin-top: 60px;
  border-radius: 15px;
}
.vip {
  height: 20px;
  width: 100%;
}
.vip span {
  display: inline-block;
  padding-top: 15px;
  padding-left: 10px;
}
.vip span:nth-child(1) {
  color: white;
  font-weight: 800;
}
.vip span:nth-child(2) {
  margin-left: 125px;
  font-size: 13px;
}
.vip span:nth-child(3) {
  padding-top: 8px;
  font-size: 12px;
  padding-left: 10px;
  color: #dbd0d3;
  height: 20px;
}
.vip span:nth-child(4) {
  font-size: 12px;
  color: #b9b3b4;
}
.icon-yaoqing {
  margin-left: 50px;
}
.message {
  margin-top: 10px;
  height: 120px;
  width: 300px;
  background-color: #ffffff;
  margin-left: 8px;
  border-radius: 10px;
}
.music {
  height: 200px;
}
.message div {
  height: 40px;
  width: 280px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 14px;
  border-bottom: 0.5px solid rgb(238, 236, 236);
}
.message div:nth-child(3) {
  border-bottom: 0;
}
.message div span:nth-child(1) {
  font-size: 18px;
}
.message div span:nth-child(2) {
  letter-spacing: 2px;
  margin-left: 8px;
}
.message div:nth-child(1) span:nth-child(3) {
  height: 15px;
  width: 15px;
  background-color: red;
  position: absolute;
  border-radius: 15px;
  font-size: 12px;
  right: 45px;
  margin-top: 13px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
}
.message div:nth-child(1) span:nth-child(4) {
  font-size: 12px;
  right: 20px;
  margin-top: 1px;
}
.message div:nth-child(2) span:nth-child(3) {
  height: 15px;
  width: 35px;
  background-color: #f8f5f5;
  border: 1px solid red;
  position: absolute;
  border-radius: 5px;
  font-size: 12px;
  right: 45px;
  margin-top: 12px;
  text-align: center;
  color: red;
  line-height: 15px;
}
.message div:nth-child(2) span:nth-child(4) {
  font-size: 12px;
  right: 20px;
  margin-top: 1px;
}
.message div:nth-child(3) span:nth-child(3) {
  font-size: 12px;
  right: 20px;
  margin-top: 1px;
}
.music div:nth-child(1) span:nth-child(1) {
  font-size: 12px;
  color: #b9b3b4;
}
.music div:nth-child(3) span:nth-child(3) {
  margin-left: 130px;
  font-size: 12px;
  color: #b9b3b4;
}
.music div:nth-child(4) span:nth-child(3) {
  margin-left: 60px;
  font-size: 12px;
  color: #b9b3b4;
}
.i {
  font-size: 12px;
  margin-right: 15px;
  padding-top: 6px;
}
.other {
  height: 445px;
}
.other div:nth-child(1) span {
  font-size: 12px;
  color: #b9b3b4;
}
.guanyu {
  height: 200px;
}
.login {
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: red;
}
.anniu {
  height: 30px;
  width: 30px;
  position: absolute;
  z-index: 1;
  margin-left: 5px;
  margin-top: 12px;
  background-color: rgba(0, 0, 0, 0);
}
.yi {
  display: none;
  transition: all 0.4s;
}
.xi {
  display: block;
  transition: all 0.4s;
}
.hei {
  height: 701px;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
</style>