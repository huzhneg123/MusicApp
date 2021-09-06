<template>
  <div>
    <AlumCps
      :songName="songName"
      :publishTime="publishTime"
      :alumImg="aulmImg"
      :artistName="artistName"
      :aulmComments="aulmComments"
      :getAlumCounts="getAlumCounts"
    ></AlumCps>

    <div class="alum">
      <ul>
        <li v-for="(item,index) in getAlumSongList" :key="item.id" @click="toPath(item.id,index)">
          <span>{{index+1}}</span>
          <span>{{item.name}}</span>
          <span>{{alumInfo.artist.name}}</span>

          <span class="iconfont icon-gengduo"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { getAlumCount } from "../../api/axios";
import { getAlumComments } from "../../api/axios";
import { getAlumSong } from "../../api/axios";
import moment from "moment";

import AlumCps from "@/components/alum/AlumCps";
export default {
  data() {
    return {
      alumInfo: JSON.parse(this.$route.query.items),
      getAlumSongList: [],
      alumComments: [],
      getAlumCountList: {}
    };
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
  },
  computed: {
    // 此singer里面存放的是歌手的所有信息
    // ...mapGetters(["singer"]),
    artistName() {
      return this.alumInfo.artist.name;
    },
    songName() {
      return this.alumInfo.name;
    },
    publishTime() {
      const time = this.alumInfo.publishTime;
      let musicTime = moment(time)
        .subtract(10, "days")
        .calendar();
      return musicTime;
    },
    aulmImg() {
      return this.alumInfo.blurPicUrl;
    },
    aulmComments() {
      return this.alumComments;
    },
    getAlumCounts() {
      return this.getAlumCountList;
    }
  },
  async mounted() {
    let getAlumSongData = await getAlumSong(this.alumInfo.id);
    this.getAlumSongList = getAlumSongData.songs;
    // console.log(this.alumInfo);
    // 专辑评论
    let getAlumCommentsData = await getAlumComments(this.alumInfo.id, 100);
    this.alumComments = getAlumCommentsData.data.comments;
    console.log(this.alumComments);
    // 专辑点赞数等
    let getAlumCountData = await getAlumCount(this.alumInfo.id);
    this.getAlumCountList = getAlumCountData.data;
    console.log(this.getAlumCountList);
  },
  components: {
    AlumCps
  }
};
</script>

<style >
.alum ul {
  height: 420px;
  overflow-y: scroll;
}
.alum ul li {
  position: relative;
  margin-top: 50px;
}
.alum ul li span:nth-child(1) {
  position: absolute;
  color: rgb(91, 86, 86);
  font-size: 14px;
  margin-top: 10px;
}
.alum ul li span:nth-child(4) {
  position: absolute;
  right: 0;
  margin-right: 15px;
  font-size: 21px;
}
.alum ul li span:nth-child(2) {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 30px;
}
.alum ul li span:nth-child(3) {
  display: inline-block;
  position: absolute;
  left: 0;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 30px;
  color: rgb(95, 91, 91);
}
.alum ul li span {
  display: inline-block;
  margin-left: 10px;
}
</style>