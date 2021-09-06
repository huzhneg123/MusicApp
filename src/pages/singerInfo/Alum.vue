<template>
  <div class="alum">
    <ul>
      <li v-for="(item) in getSingerAlumList" :key="item.id" @click="toPath(item) ">
        <img :src="item.blurPicUrl" />
        <span>
          <h2>{{item.name}}</h2>
          <!-- <h2>{{q}}</h2> -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入格式化时间仓库
// import moment from "moment";
// 取vuex中数据的语法糖
import { mapGetters } from "vuex";
import { getSingerAlum } from "../../api/axios";
export default {
  data() {
    return {
      getSingerAlumList: [],
      geshihuaTimeList: []
    };
  },
  async mounted() {
    let getSingerAlumData = await getSingerAlum(this.singer.id);
    this.getSingerAlumList = getSingerAlumData.hotAlbums;
  },
  computed: {
    // 此singer里面存放的是歌手的所有信息
    ...mapGetters(["singer"])
  },
  methods: {
    toPath(item) {
      this.$router.push({
        path: "/alumPage",
        query: {
          items: JSON.stringify(item)
        }
      });
    }
  }
};
</script>

<style scoped>
.alum ul {
  height: 290px;
  overflow-y: scroll;
}
.alum ul li {
  display: flex;
  margin-top: 15px;
}
.alum ul li span {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.alum ul li span h2:nth-child(1) {
  font-size: 15px;
}
.alum ul li span h2:nth-child(2) {
  font-size: 12px;
  color: rgb(88, 84, 84);
}
.alum ul li img {
  height: 50px;
  width: 50px;
  margin-left: 15px;
  /* vertical-align: middle; */
  border-radius: 10px;
}
</style>