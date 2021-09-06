<template>
  <transition name="li">
    <div class="singerInfo">
      <SingerInfo_cps :title="title"></SingerInfo_cps>
      <img class="singerInfo_img" :src="singer.img1v1Url" />
      <div class="singerInfo_fangkuai">
        <h5>{{singer.name}}</h5>
        <span>542.2万</span>
        <span>粉丝</span>
        <div>+关注</div>
      </div>
      <div class="singerInfo_router">
        <router-link to="/singerInfo/mainPage" replace>
          <span>主页</span>
        </router-link>
        <router-link to="/singerInfo/song" replace>
          <span>歌曲</span>
        </router-link>
        <router-link to="/singerInfo/alum" replace>
          <span>
            专辑
            <i>{{singer.albumSize}}</i>
          </span>
        </router-link>
        <router-link to="/singerInfo/video" replace>
          <span>视频</span>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
// 取vuex中数据的语法糖
import { mapGetters } from "vuex";
import { getSingerDesc } from "../../api/axios";
// 引入歌手信息组件
import SingerInfo_cps from "../../components/singerInfo_cps/SingerInfo_cps";
export default {
  data() {
    return {
      getSingerDescList: {}
    };
  },
  computed: {
    title() {
      return this.singer.name;
    },

    // 此singer里面存放的是歌手的所有信息
    ...mapGetters(["singer"])
  },
  created() {
    // console.log(this.singer);
  },
  async mounted() {
    let getSingerDescData = await getSingerDesc(this.singer.id);
    this.getSingerDescList = getSingerDescData;
  },
  methods: {},
  components: {
    SingerInfo_cps
  }
};
</script>

<style scoped>
.singerInfo_img {
  width: 100%;
  height: 250px;
}
.singerInfo_fangkuai {
  position: absolute;
  height: 100px;
  width: 90%;
  background-color: #ffffff;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -20px;
  border-radius: 10px;
  text-align: center;
}
.singerInfo_fangkuai h5 {
  font-size: 20px;
  margin-top: 15px;
}
.singerInfo_fangkuai span {
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  color: rgb(105, 102, 102);
  margin-right: 3px;
}
.singerInfo_fangkuai div {
  margin-top: 10px;
  font-size: 13px;
  color: #ffffff;
  height: 22px;
  width: 70px;
  background: -webkit-linear-gradient(left, #df4d48, #dd2020);
  line-height: 22px;
  border-radius: 10px;
  margin-left: 50%;
  transform: translateX(-50%);
}
.singerInfo_router {
  display: flex;
  margin-top: 100px;
  justify-content: space-around;
  height: 25px;
}
.singerInfo_router span {
  font-size: 14px;
  height: 40px;
}
.singerInfo_router span i {
  position: absolute;
  font-size: 12px;
  color: rgb(90, 87, 87);
}
.li-enter-active,
.li-leave-activ {
  transition: all 0.3s;
}
.li-enter,
.li-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>