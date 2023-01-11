<script>
import LineChart from "@/components/charts/dailySales/lineChartComponent.vue";
export default {
  name: "DailySalesView",
  components: { LineChart },
};
</script>

<template>
  <div>
    <div
      class="d-flex flex-wrap gap-1 justify-content-end align-items-center mb-3"
    >
      <input type="date" />
      <input type="date" />
    </div>
    <LineChart />
  </div>
</template>

<style scoped>
input {
  width: 180px;
  background-color: inherit;
  color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 5px;
  outline: none;
  padding: 5px;
  text-align: center;
}
</style>
