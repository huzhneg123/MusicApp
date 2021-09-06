<template>
  <div>
    <RangKingPageCps :pic="pic" :songList="songList"></RangKingPageCps>
  </div>
</template>

<script>
import RangKingPageCps from "@/components/rangKingPageCps/RangKingPageCps";
export default {
  data() {
    return {
      rangKingPageList: JSON.parse(this.$route.query.items)
    };
  },
  computed: {
    pic() {
      return this.rangKingPageList[0].al.picUrl;
    },
    songList() {
      return this.rangKingPageList;
    }
  },

  components: {
    RangKingPageCps
  }
};
</script>

<style>
</style>