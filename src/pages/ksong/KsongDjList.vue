<template>
  <div>
    <KsongDjListCps
      :message="message"
      :bacImg="bacImg"
      :avartatImg="avartatImg"
      :nickName="nickName"
      :programs="programs"
      @select="selectItem"
    ></KsongDjListCps>
  </div>
</template>

<script>
// import { getMusicUrl } from "../api/axios";

import { mapActions } from "vuex";
import { getDjPrograms } from "../../api/axios";
import KsongDjListCps from "@/components/djPrograms/KsongDjListCps";
import { getDjMassege } from "../../api/axios";
export default {
  data() {
    return {
      DjId: this.$route.query.DjId,
      getDjMassegeList: {},
      getBacImg: "",
      getAvatarImg: "",
      getNickname: "",
      getDjProgramsList: []
    };
  },
  async mounted() {
    let getDjMassegeData = await getDjMassege(this.DjId);
    this.getDjMassegeList = getDjMassegeData.djRadio;
    this.getBacImg = getDjMassegeData.djRadio.dj.backgroundUrl;
    this.getAvatarImg = getDjMassegeData.djRadio.dj.avatarUrl;
    this.getNickname = getDjMassegeData.djRadio.dj.nickname;
    this.getShouCang = getDjMassegeData.subCount;
    // 获取节目列表
    let getDjProgramsData = await getDjPrograms(this.DjId, 20);
    this.getDjProgramsList = getDjProgramsData.programs;
    // 获取节目url资源
  },
  computed: {
    message() {
      return this.getDjMassegeList;
    },
    bacImg() {
      return this.getBacImg;
    },
    avartatImg() {
      return this.getAvatarImg;
    },
    nickName() {
      return this.getNickname;
    },
    programs() {
      return this.getDjProgramsList;
    }
  },
  methods: {
    selectItem(item, index) {
      this.selectPlay({
        list: this.getDjProgramsList,
        index
      });
    },
    ...mapActions(["selectPlay"])
  },
  components: { KsongDjListCps }
};
</script>

<style>
</style>