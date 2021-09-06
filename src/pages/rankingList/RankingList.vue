<template>
  <div class="rankingList">
    <div class="header">
      <div class="left iconfont icon-cha" @click="$router.back()"></div>
      <span class="header_pai">排行榜</span>
      <div class="top">
        <span v-for="item in topListTitle" :key="item.id">{{item.name}}</span>
      </div>
    </div>

    <!-- 榜单推荐 -->
    <div class="tuijianTop">
      <h5>推荐榜单</h5>
      <span>
        <img src="../../common/img/lub.png" />
        <h5>名字</h5>
      </span>
    </div>
    <!-- 曲风榜1 -->
    <div class="qufengbang">
      <h5>曲风榜单</h5>
      <!-- 新歌榜 -->
      <div v-for="item in newTopSongList" :key="item.name" @click="toPathNew(newTopSongAllList)">
        <span>
          <img :src="item.img" />
        </span>
        <span>
          <h5>
            1.{{item.tracks[0].name}}
            <i>-{{item.tracks[0].ar[0].name}}</i>
          </h5>
          <h5>
            2.{{item.tracks[1].name}}
            <i>-{{item.tracks[1].ar[0].name}}</i>
          </h5>
          <h5>
            3.{{item.tracks[2].name}}
            <i>-{{item.tracks[2].ar[0].name}}</i>
          </h5>
        </span>
      </div>
      <!-- 热歌榜 -->
      <div v-for="item in hotTopSongList" :key="item.name" @click="toPathHot(hotTopSongAllList)">
        <span>
          <img :src="item.img" />
        </span>
        <span>
          <h5>
            1.{{item.tracks[0].name}}
            <i>-{{item.tracks[0].ar[0].name}}</i>
          </h5>
          <h5>
            2.{{item.tracks[1].name}}
            <i>-{{item.tracks[1].ar[0].name}}</i>
          </h5>
          <h5>
            3.{{item.tracks[2].name}}
            <i>-{{item.tracks[2].ar[0].name}}</i>
          </h5>
        </span>
      </div>
      <!-- 原创棒 -->
      <div
        v-for="item in myselfTopSongList"
        :key="item.name"
        @click="toPathMy(myselfTopSongAllList)"
      >
        <span>
          <img :src="item.img" />
        </span>
        <span>
          <h5>
            1.{{item.tracks[0].name}}
            <i>-{{item.tracks[0].ar[0].name}}</i>
          </h5>
          <h5>
            2.{{item.tracks[1].name}}
            <i>-{{item.tracks[1].ar[0].name}}</i>
          </h5>
          <h5>
            3.{{item.tracks[2].name}}
            <i>-{{item.tracks[2].ar[0].name}}</i>
          </h5>
        </span>
      </div>
      <!-- 飙升榜 -->
      <div
        v-for="item in biaoShengTopSongList"
        :key="item.name"
        @click="toPathBiao(biaoShengTopSongALlList)"
      >
        <span>
          <img :src="item.img" />
        </span>
        <span>
          <h5>
            1.{{item.tracks[0].name}}
            <i>-{{item.tracks[0].ar[0].name}}</i>
          </h5>
          <h5>
            2.{{item.tracks[1].name}}
            <i>-{{item.tracks[1].ar[0].name}}</i>
          </h5>
          <h5>
            3.{{item.tracks[2].name}}
            <i>-{{item.tracks[2].ar[0].name}}</i>
          </h5>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { getTop } from "../../api/axios";

export default {
  data() {
    return {
      topListTitle: [],
      // 曲风榜单
      topList: [],
      // 新歌榜
      newTopSongList: [],
      newTopSongAllList: [],
      // 热歌榜
      hotTopSongList: [],
      hotTopSongAllList: [],
      // 原创榜
      myselfTopSongList: [],
      myselfTopSongAllList: [],
      // 飙升榜
      biaoShengTopSongList: [],
      biaoShengTopSongALlList: []
    };
  },
  methods: {
    toPathNew(item) {
      this.$router.push({
        path: "/rangKingPage",
        query: {
          // items: item
          items: JSON.stringify(item)
        }
      });
    },
    toPathHot(item) {
      this.$router.push({
        path: "/rangKingPage",
        query: {
          // items: item
          items: JSON.stringify(item)
        }
      });
    },
    toPathMy(item) {
      this.$router.push({
        path: "/rangKingPage",
        query: {
          // items: item
          items: JSON.stringify(item)
        }
      });
    },
    toPathBiao(item) {
      this.$router.push({
        path: "/rangKingPage",
        query: {
          // items: item
          items: JSON.stringify(item)
        }
      });
    }
  },
  async mounted() {
    // 新歌榜单
    let NewTopData = await getTop(0);
    let newTopList = [];
    let newTop = {
      name: NewTopData.playlist.name,
      tracks: NewTopData.playlist.tracks.slice(0, 3),
      img: NewTopData.playlist.coverImgUrl
    };
    newTopList.push(newTop);
    this.newTopSongList = newTopList;
    this.newTopSongAllList = NewTopData.playlist.tracks;

    // 热歌榜单
    let HotTopData = await getTop(1);
    let hotTopList = [];
    let hotTop = {
      name: HotTopData.playlist.name,
      tracks: HotTopData.playlist.tracks.slice(0, 3),
      img: HotTopData.playlist.coverImgUrl
    };
    hotTopList.push(hotTop);
    this.hotTopSongList = hotTopList;
    this.hotTopSongAllList = HotTopData.playlist.tracks;
    // 原创榜
    let MyselfTopData = await getTop(2);
    let myselfTopList = [];
    let myselfTop = {
      name: MyselfTopData.playlist.name,
      tracks: MyselfTopData.playlist.tracks.slice(0, 3),
      img: MyselfTopData.playlist.coverImgUrl
    };
    myselfTopList.push(myselfTop);
    this.myselfTopSongList = myselfTopList;
    this.myselfTopSongAllList = MyselfTopData.playlist.tracks;
    // 飙升榜
    let BiaoShengTopData = await getTop(3);
    let biaoShengTopList = [];
    let biaoShengTop = {
      name: BiaoShengTopData.playlist.name,
      tracks: BiaoShengTopData.playlist.tracks.slice(0, 3),
      img: BiaoShengTopData.playlist.coverImgUrl
    };
    biaoShengTopList.push(biaoShengTop);
    this.biaoShengTopSongList = biaoShengTopList;
    this.biaoShengTopSongALlList = BiaoShengTopData.playlist.tracks;

    let a = await getTop(9);
    console.log(a);
  }
};
</script>

<style scoped>
.rankingList .header {
  z-index: 2;
  position: fixed;
  height: 90px;
}
.rankingList .header .top span {
  width: 100px;
  margin-left: 10px;
  margin-right: 20px;

  font-size: 14px;
}
.top {
  margin-top: 50px;

  width: 100%;
  height: 20px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.top::-webkit-scrollbar {
  display: none;
}

.rankingList .header .left {
  margin-left: 10px;
  font-size: 19px;
}
.rankingList .header .header_pai {
  position: absolute;
  font-size: 22px;
  display: inline-block;
  width: 100px;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 60px;
  font-size: 22px;
}
.recomTopList span {
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
  width: 100px;
  font-size: 14px;
}

/* 推荐榜单 */
.tuijianTop {
  padding-top: 100px;
  height: 150px;
  width: 94%;
  background-color: #ffffff;
  margin-left: 3%;
  border-radius: 7px;
}
.tuijianTop span h5 {
  width: 100px;
  padding-top: 5px;
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tuijianTop span {
  display: inline-block;
  margin-left: 10px;
  margin-top: 7px;
  height: 90px;
  width: 100px;
  background-color: red;
  margin-right: 5px;
}
.tuijianTop span img {
  height: 100%;
  width: 100%;
}
.tuijianTop span h5 {
  font-size: 13px;
  font-weight: 400;
  margin-left: 0px;
}
/* 曲风榜单 */
.qufengbang {
  height: 600px;
  width: 100%;
  margin-top: 10px;
}
.qufengbang h5 {
  margin-left: 10px;
  margin-bottom: 15px;
}
.qufengbang div {
  height: 100px;
  width: 94%;
  background: -webkit-linear-gradient(left, hsl(308, 40%, 60%), #c9ab95);
  margin-bottom: 10px;
  margin-left: 3%;
  border-radius: 7px;
}
.qufengbang div span {
  position: absolute;
  height: 100px;
  width: 120px;
}
.qufengbang div span img {
  border-radius: 7px;
  width: 100%;
  height: 100%;
}
.qufengbang div span:nth-child(2) {
  width: 300px;
  height: 100px;
}
.qufengbang div span h5 {
  margin-left: 170px;
  margin-top: 13px;
  font-size: 14px;
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qufengbang div span h5 i {
  color: rgb(226, 221, 218);
  font-size: 12px;
}
</style>