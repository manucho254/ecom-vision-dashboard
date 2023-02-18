<script>
import areaChart from "./charts/dashboard/areaChartComponent.vue";
import donutChart from "./charts/dashboard/donutChartComponent.vue";
import Table from "@/components/tableComponent.vue";
import { mapGetters } from "vuex";


export default {
  name: "DashComponent",
  components: { areaChart, donutChart, Table },
  data: () => {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "customer", sortable: true },
        { key: "cost", sortable: true },
        { key: "createdAt", sortable: true },
      ],
      items: [],
      accountingData: [
        { message: "Total Customers", total: 5123, percentage: 21 },
        { message: "Sales Today", total: 5023, percentage: 21 },
        { message: "Monthly sales", total: 5183, percentage: 21 },
        { message: "yearly Sales", total: 5143, percentage: 21 },
      ],
      currentPage: 1,
    };
  },
  mounted () {
    this.$store.dispatch("dashboard/fetchProducts");
    this.items = this.getProducts
  },
  computed: {
    ...mapGetters({ getProducts: "dashboard/getProducts" }),
    rows() {
      return this.getProducts.length;
    },
  },
};
</script>

<template>
  <div class="mb-5">
    <div class="row g-2">
      <div class="col-md-4">
        <div class="row g-2">
          <div
            class="col-md-6"
            v-for="(data, index) in accountingData"
            :key="index"
          >
            <div class="card p-2 bg-blueish text-gray">
              <span class="d-flex justify-content-between">
                <p class="font-sm">{{ data.message }}</p>
                <span><i class="fa text-gold fa-envelope"></i></span>
              </span>
              <p class="text-gold">{{ data.total }}</p>
              <span class="d-flex justify-content-between">
                <p class="font-sm text-gold">+ {{ data.percentage }} %</p>
                <p class="font-sm">Since last month</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-8 rounded bg-blueish">
        <areaChart />
      </div>
    </div>
    <div class="row pt-2 gap-2 flex-wrap px-3">
      <div class="col-md-8 bg-blueish rounded">
        <Table
          class="h-345"
          :items="items"
          :fields="fields"
          per-page="3"
          :current-page="currentPage"
        >
        </Table>
        <div
          class="pagination pagination-rounded d-flex mt-2 justify-content-center justify-content-lg-end"
        >
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            pills
            per-page="3"
            align="right"
          ></b-pagination>
        </div>
        <div class="d-flex justify-content-end align-items-center"></div>
      </div>
      <div class="col-md-4 card bg-blueish rounded p-2 h-400">
        <p class="text-mid">Sales by Category</p>
        <donutChart />
        <p class="text-sm mt-4">
          Breakdown of real states and information via category for revenue made
          for this year and total sales.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .flex-wrap {
    flex-wrap: wrap !important;
  }
}
@media screen and (min-width: 600px) {
  .flex-wrap {
    flex-wrap: nowrap !important;
  }
}
</style>
