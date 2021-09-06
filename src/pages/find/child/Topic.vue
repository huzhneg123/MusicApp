<template>
  <div>
    <PageHeader title="话题"></PageHeader>
    <div class="top">
      <ul>
        <li>
          <img src="../../../common/img/lub.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/childPageHeader/PageHeader";
import { topic } from "../../../api/axios";

export default {
  async mounted() {
    let topicData = await topic(20);
    console.log(topicData);
  },
  methods: {},
  components: {
    PageHeader
  }
};
</script>

<style scoped>
.top {
  height: 1000px;
}
</style>