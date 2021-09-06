<template>
  <div class="singer">
    <div class="singer_header">
      <span class="iconfont icon-zuo" @click="$router.back()"></span>
      <span>歌手分类</span>
    </div>
    <div class="chi_zhan"></div>

    <div class="singer_nag">
      <span>华语</span>
    </div>
    <div class="singer_nag_zhan"></div>
    <div class="singer_list">
      <ul>
        <li v-for="item in getSingerTopList" :key="item.id" @click="selectItem(item)">
          <img :src="item.picUrl" />
          <span>{{item.name}}</span>
          <span>关注</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSingerTop } from "../../api/axios";
// 往vuex中写数据的语法糖
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      getSingerTopList: [],
      id: {}
    };
  },
  async mounted() {
    let getSingerTopData = await getSingerTop();
    this.id = getSingerTopData.list.artists.id;
    this.getSingerTopList = getSingerTopData.list.artists;
  },
  components: {},
  methods: {
    selectItem(item) {
      this.$router.push({
        path: "/singerInfo"
      });
      this.setSinger(item);
    },
    ...mapMutations({
      setSinger: "SET_SINGER"
    })
  }
};
</script>

<style scoped>
.he-enter-active .he-leave-active {
  transition: all 0.3s;
}

.he-enter .he-leave-to {
  transform: translate3d(100%, 0, 0);
}
.singer_header {
  position: fixed;
  height: 40px;
  width: 100%;
}
.singer_header .icon-zuo {
  font-size: 25px;
  line-height: 40px;
  margin-left: 10px;
}
.singer_header span:nth-child(2) {
  position: absolute;
  display: inline-block;
  font-size: 20px;
  line-height: 40px;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
}

.chi_zhan {
  height: 40px;
  width: 100%;
}
/* .singer {
  height: 1200px;
} */
.singer_nag {
  position: fixed;
  height: 60px;
  width: 100%;
}
.singer_nag_zhan {
  height: 60px;
}
.singer_nag span {
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
}
.singer_list {
  height: 570px;
  overflow-y: scroll;
}
.singer_list ul {
  margin-left: 10px;
  position: relative;
}
.singer_list ul li {
  margin-top: 15px;
}
.singer_list ul li img {
  vertical-align: middle;
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
.singer_list ul li span:nth-child(2) {
  margin-left: 10px;
  font-size: 15px;
}
.singer_list ul li span:nth-child(3) {
  position: absolute;
  right: 0;
  margin-top: 11px;
  margin-right: 20px;
}
</style>