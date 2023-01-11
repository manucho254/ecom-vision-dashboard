<script>
import lineChart from "@/components/charts/overview/lineChartComponent.vue";
export default {
  name: "overView",
  components: { lineChart },
  data: () => {
    return {
      selectedValue: "units",
    };
  },
  methods: {
    select() {
      console.log(this.selectedValue);
    },
  },
};
</script>
<template>
  <div>
    <select @change="select" class="select rounded" v-model="selectedValue">
      <option value="units">Units</option>
      <option value="free">Free</option>
    </select>
    <lineChart />
  </div>
</template>

<style>
.select {
  background-color: #0a0334;
  color: #fff;
  border: 1px solid;
  font-size: 15px;
  padding: 8px;
}
</style>
