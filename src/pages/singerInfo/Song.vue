<template>
  <div class="singerSong">
    <ul>
      <li v-for="(item,index) in getSingerSongList" :key="item.id" @click="toPath(item.id,index)">
        <span>{{index+1}}</span>
        <span>{{item.name}}</span>
        <span class="iconfont icon-gengduo"></span>
      </li>
    </ul>
  </div>
</template>

<script>
// 取vuex中数据的语法糖
import { mapGetters } from "vuex";
import { getSingerSong } from "../../api/axios";
export default {
  data() {
    return {
      getSingerSongList: []
    };
  },
  async mounted() {
    let getSingerSongData = await getSingerSong(this.singer.id);
    this.getSingerSongList = getSingerSongData.hotSongs;
    console.log(getSingerSongData.hotSongs);
  },
  computed: {
    // 此singer里面存放的是歌手的所有信息
    ...mapGetters(["singer"])
  },
  methods: {
    toPath(item, index) {
      this.$router.push({
        path: "/music",
        query: {
          songId: item,
          index: index
        }
      });
    }
  }
};
</script>

<style scoped>
.singerSong ul {
  height: 290px;
  overflow-y: scroll;
}
.singerSong ul li {
  position: relative;
  margin-top: 15px;
}
.singerSong ul li span:nth-child(1) {
  position: absolute;
  color: rgb(91, 86, 86);
  font-size: 14px;
  margin-top: 2px;
}
.singerSong ul li span:nth-child(3) {
  position: absolute;
  right: 0;
  margin-right: 15px;
  font-size: 21px;
}
.singerSong ul li span:nth-child(2) {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 30px;
}
.singerSong ul li span {
  display: inline-block;
  margin-left: 10px;
}
</style>