<template>
  <section>
    <LeftNav />
    <PageHeader title="广场"></PageHeader>
    <div class="headerZhan"></div>
    <div class="videoBody">
      <div class="videoBody_tag">
        <span
          ref="li"
          v-for="(item,index) in getVideoTagList"
          :key="item.id"
          @click="videoTag(item.id),tagStyle(index)"
          :class="{reda:indexx===index}"
        >{{item.name}}</span>
      </div>
      <div class="tagZhan"></div>
      <div class="videoBody_body">
        <span
          v-for="(item,index) in getVideoList"
          :key="index"
          @click="toCloudVideo(item.data.vid)"
        >
          <img :src="item.data.coverUrl" />

          <h5>{{item.data.title}}</h5>
          <h5>
            <span class="iconfont icon-bofang101">123</span>
            <span class="iconfont icon-dianzan">{{item.data.praisedCount}}</span>
          </h5>
          <img :src="item.data.creator.avatarUrl" class="avatar" />

          <div class="playTime">{{format(item.data.durationms/1000)}}</div>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import PageHeader from "@/components/childPageHeader/PageHeader";
import { getVideoTagList } from "../../api/video";
import { getvideo } from "../../api/video";
import LeftNav from "@/components/LeftNav/LeftNav";

export default {
  data() {
    return {
      getVideoTagList: [],
      getVideoList: [],
      redStyle: "",
      indexx: ""
    };
  },
  methods: {
    toCloudVideo(item) {
      this.$router.push({
        path: "/cloudVideo",
        query: {
          vId: item
        }
      });
    },
    tagStyle(index) {
      this.indexx = index;
      this.redStyle = "reda";
      let firtTagStyle = this.$refs.li;
      firtTagStyle[0].style.borderBottom = "";
    },
    async videoTag(tagId) {
      // 获取视频
      let getvideoData = await getvideo(tagId);
      this.getVideoList = getvideoData.datas;
      console.log(this.getVideoList);
    },
    format(interval) {
      interval = interval | 0;
      let minute = (interval / 60) | 0;
      let second = interval % 60;
      if (minute <= 9) {
        minute = `${0}${minute}`;
      }

      if (second <= 9) {
        second = `${0}${second}`;
      }
      return `${minute}:${second}`;
    },
    firtTag() {
      let firtTagStyle = this.$refs.li;
      firtTagStyle[0].style.borderBottom = "3px solid red";
    }
  },
  async mounted() {
    // 获取视频列表标签
    let getVideoTagData = await getVideoTagList();
    this.getVideoTagList = getVideoTagData.data.slice(0, 15);

    let firstVideo = getVideoTagData.data.slice(0, 1);

    let getvideoData = await getvideo(firstVideo[0].id);
    this.getVideoList = getvideoData.datas;

    this.firtTag();
  },
  components: {
    LeftNav,
    PageHeader
  }
};
</script>

<style scoped>
.videoBody {
  height: 1000px;
}
.headerZhan {
  height: 40px;
}
.videoBody_tag {
  height: 40px;
  width: 100%;
  background-color: red;
  line-height: 40px;
  position: fixed;
  z-index: 1;
}
.tagZhan {
  height: 40px;
}
.videoBody_tag span {
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 3px;
}
/* 切换样式 */
.reda {
  border-bottom: 3px solid red;
}
.videoBody_tag {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #ffffff;
}
.videoBody_tag::-webkit-scrollbar {
  display: none;
}
/* .videoBody_body span {
  height: 200px;
  width: 200px;
  background-color: red;
}
.videoBody_body span img {
  height: 200px;
} */
/* ********* */
.videoBody_body {
  margin-top: 15px;
  display: flex;
  flex-flow: wrap;
}
.videoBody_body .avatar {
  height: 20px;
  width: 20px;
  position: absolute;
  margin-top: -60px;
  margin-left: 10px;
}

.videoBody_body span {
  margin-left: 15px;
  margin-bottom: 30px;
}
.videoBody_body span img {
  position: relative;
  width: 165px;
  height: 200px;
  border-radius: 10px;
}
.videoBody_body span h5:nth-child(2) {
  width: 165px;
  margin-top: 2px;
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 25px;
}
.videoBody_body span h5:nth-child(3) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 165px;
  margin-top: 2px;
  font-size: 12px;
  color: rgb(93, 89, 89);
  margin-top: 10px;
  position: absolute;
  margin-left: -10px;
}
.videoBody_body span h5:nth-child(3) span {
  font-size: 12px;
}
.playTime {
  margin-top: -53px;
  position: absolute;
  color: #ffffff;
  margin-left: 120px;
  font-size: 12px;
}
</style>