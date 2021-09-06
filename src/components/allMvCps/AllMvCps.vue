<template>
  <div>
    <div class="AllMv">
      <span v-for="item in getMvs" :key="item.id" @click="toPath(item.id) ">
        <img :src="item.cover" />
        <h5>{{item.name}}</h5>
        <h5>{{item.artistName}}</h5>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getMvs: {
      type: Array,
      default: () => []
    }
  },
  mounted() {},
  methods: {
    toPath(item) {
      this.$router.push({
        path: "/mv",
        query: {
          mvId: item
        }
      });
    }
  }
};
</script>

<style>
.AllMv {
  margin-top: 15px;
  display: flex;
  flex-flow: wrap;
}
.AllMv span {
  margin-left: 15px;
  margin-bottom: 30px;
}
.AllMv span img {
  width: 165px;
  height: 130px;
}
.AllMv span h5:nth-child(2) {
  width: 165px;
  margin-top: 2px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.AllMv span h5:nth-child(3) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 165px;
  margin-top: 2px;
  font-size: 12px;
  color: rgb(93, 89, 89);
}
</style>