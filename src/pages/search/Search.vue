<template>
  <div class="search">
    <div class="search_header">
      <div class="search_header_text">
        <input
          ref="input"
          type="text"
          :placeholder="searchWors"
          autofocus="autofocus"
          v-model="search"
        />
        <span v-show="search" @click="searchNone" class="iconfont icon-cha"></span>
        <span @click="$router.back()">取消</span>
      </div>
    </div>
    <div class="zhanwei"></div>
    <!-- 历史记录 -->
    <div class="searchSongHiroty" v-show="searchHistory.length>0">
      <div>历史</div>
      <div>
        <span v-for="(item,index) in searchHistory" :key="index" @click="onHistory(item)">{{item}}</span>
      </div>
      <!-- clearHistory, -->
      <div class="iconfont icon-shanchu1" @click="blockPop"></div>
    </div>
    <!-- 遮罩层 -->

    <van-tabs v-model="active" animated>
      <van-tab :title="'热搜榜 '">
        <div class="search_hot">
          <div class="search_hot_left">
            <ul>
              <li
                v-for="(item,index) in getHotSearchList"
                :key="item.searchWord"
                @click="addQuery(item.searchWord)"
              >
                <i>{{index+1}}</i>
                {{item.searchWord}}
                <img :src="item.iconUrl" />
              </li>
            </ul>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class="search_music">
      <div class="search_music_songer" @click="$router.push('/singer')">
        <h2>歌手分类</h2>
      </div>
      <div class="search_music_fenlei">
        <h2>歌手分类</h2>
      </div>
    </div>
    <!-- 搜索建议列表 -->
    <div class="search_suggest" v-show="searchSuggestShow">
      <ul>
        <li
          v-for="(item,index) in searchSongList"
          :key="index"
          @click="toPath(item.id,index),onItem(item.name)"
        >
          <span class="iconfont icon-icon-system-search"></span>
          {{item.name}}
        </li>
      </ul>
    </div>
    <transition name="pop">
      <Pop v-show="isShow" @qingkong="qingPop" @quxiao="q" :text="talk"></Pop>
    </transition>
  </div>
</template>

<script>
import { Overlay } from "vant";

Vue.use(Overlay);
import { mapActions, mapGetters } from "vuex";

import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
import { getHotSearch } from "../../api/axios";
import { getSearchWord } from "../../api/axios";
// import { getSearchSu } from "../../api/axios";
import { getSearchSugget } from "../../api/axios";
import Pop from "../../components/pop/Pop";

export default {
  data() {
    return {
      active: "",
      // 热搜
      getHotSearchList: [],
      searchWors: "",
      search: "",
      searchSuggestShow: false,
      searchSuggestList: [],
      searchSuggestSongList: [],
      // ---
      searchSongList: [],
      isShow: false
    };
  },
  async mounted() {
    // 搜索列表
    let getHotSearchData = await getHotSearch();
    this.getHotSearchList = getHotSearchData.data;
    // 搜索关键字
    let getSearchWordData = await getSearchWord();
    this.searchWors = getSearchWordData.data.showKeyword;
  },
  methods: {
    q(data) {
      this.isShow = data;
    },
    qingPop(data) {
      this.isShow = data;
    },
    blockPop() {
      this.isShow = true;
    },
    clearHistory() {
      this.clearSearchHistory();
    },
    onHistory(item) {
      this.search = item;
    },
    onItem(item) {
      this.saveSearchHistory(item);
      // this.searchHistory.unshift(item);
      // console.log(this.searchHistory);
      // localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
    },
    searchNone() {
      this.search = "";
    },
    addQuery(query) {
      this.search = query;
    },
    async query() {
      if (!this.search) {
        return;
      }
      let getSearchSuggetData = await getSearchSugget(this.search);
      this.searchSongList = getSearchSuggetData.result.songs;
      if (!getSearchSuggetData.result.songs) {
        this.searchSongList = "";
      }
    },
    toPath(item, index) {
      this.$router.push({
        path: "/music",
        query: {
          songId: item,
          index: index
        }
      });
    },
    ...mapActions([
      "saveSearchHistory",
      "deleteSearchHistory",
      "clearSearchHistory"
    ])
  },
  computed: {
    talk() {
      return "确定要清空历史记录吗？";
    },
    ...mapGetters(["searchHistory"])
  },
  watch: {
    search() {
      this.query();
      this.searchSuggestShow = true;
      if (!this.search) {
        this.searchSuggestShow = false;
      }
    }
  },
  components: {
    Pop
  }
};
</script>

<style scoped>
/* .content {
  height: 100px;
} */
.search {
  position: relative;
}
.search_header {
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
}

.search_header_text input {
  font-size: 14px;
  padding-left: 10px;
}

.search_header input {
  background-color: rgb(243, 243, 243);
  margin-left: 15px;
  height: 30px;
  margin-top: 10px;
  width: 80%;
  border-radius: 15px;
  outline: none;
}
.search_header input::placeholder {
  font-size: 13px;
  color: rgb(189, 183, 183) !important;
  padding-left: 5px;
}
.search_header span:nth-child(2) {
  display: inline-block;
  position: absolute;
  font-size: 13px;
  z-index: 2;
  margin-left: -25px;
  line-height: 50px;
  color: rgb(73, 70, 70);
}
.search_header span:nth-child(3) {
  margin-right: 10px;
  position: absolute;
  line-height: 50px;
  right: 0;
}
.zhanwei {
  height: 50px;
  width: 100%;
}
/deep/ .van-tabs__nav .van-tabs__line {
  background-color: #ffffff;
  color: black;
}
/deep/ .van-tab {
  display: inline-block;
  margin-top: 25px;
  margin-left: 15px;
}
/deep/ .van-tab {
  background-color: #ffffff;
}
.search_hot {
  margin-top: 10px;
  padding-bottom: 20px;
  width: 90%;
  background-color: #ffffff;
  margin-left: 5%;
}

.search_hot_left::-webkit-scrollbar {
  width: 0px;
}
.search_hot_left ul {
  padding-top: 15px;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
}
.search_hot_left ul li {
  width: 50%;
  margin-bottom: 15px;
  font-size: 13px;
}
.search_hot_left ul li i {
  margin-right: 7px;
}
.search_hot_left ul li img {
  height: 12px;
  margin-left: 2px;
}
.search_music {
  /* margin-top: 20px; */
  height: 100px;
  width: 100%;
}
.search_music_songer {
  margin-top: 10px;
  margin-left: 15px;
  position: absolute;
  line-height: 60px;
  height: 60px;
  width: 45%;
  border-radius: 10px;
  background: linear-gradient(rgb(105, 105, 108), rgb(169, 164, 164));
}
.search_music_songer h2 {
  text-align: center;
  font-size: 19px;
  color: #f0eeee;
}
.search_music_fenlei {
  position: absolute;
  margin-top: 10px;
  right: 0;
  margin-right: 15px;
  position: absolute;
  line-height: 60px;
  height: 60px;
  width: 45%;
  border-radius: 10px;
  background: linear-gradient(rgb(174, 79, 55), rgb(206, 159, 159));
}
.search_music_fenlei h2 {
  text-align: center;
  font-size: 19px;
  color: #f0eeee;
}
.search_suggest {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  top: 50px;
}
.search_suggest ul {
  margin-left: 20px;
}
.search_suggest ul li {
  padding-bottom: 8px;
  border-bottom: 0.4px solid rgb(235, 232, 232);
  margin-bottom: 12px;
  font-size: 14px;
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.searchSongHiroty {
  height: 35px;
  width: 100%;
  /* background-color: red; */
}
.searchSongHiroty {
  display: flex;
}
.searchSongHiroty div:nth-child(1) {
  line-height: 35px;
  margin-left: 15px;
  width: 80px;
}

.searchSongHiroty div:nth-child(2) span:nth-child(1) {
  display: inline-table;
  height: 10px;
  font-size: 13px;
  background-color: rgb(241, 241, 241);
  margin-left: 10px;
}
.searchSongHiroty div:nth-child(2) span {
  display: inline-table;
  height: 10px;
  font-size: 13px;
  background-color: rgb(241, 241, 241);
  border-radius: 15px;
  margin-left: 30px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
.searchSongHiroty div:nth-child(2) {
  line-height: 25px;
  height: 25px;
  margin-top: 3px;
  width: 90%;
  margin-right: 50px;
}
.searchSongHiroty div:nth-child(3) {
  position: absolute;
  line-height: 30px;
  margin-right: 15px;
  right: 0;
  color: rgb(160, 156, 156);
}
.searchSongHiroty div:nth-child(2) {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.searchSongHiroty div:nth-child(2)::-webkit-scrollbar {
  display: none;
}

.pop-enter-active,
.pop-leaver-active {
  transition: all 0.2s;
}
.pop-enter,
.pop-leave-to {
  opacity: 0;
}
</style>