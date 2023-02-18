<script>
import Table from "@/components/tableComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "transactionsView",
  components: { Table },
  data: () => {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "transaction_id", sortable: true },
        { key: "customer", sortable: true },
        { key: "country", sortable: true },
        { key: "createdAt", sortable: true },
      ],
      items: [],
      currentPage: 1,
      searchInput: "",
    };
  },
  mounted() {
    this.$store.dispatch("dashboard/fetchTransactions");
    this.items = this.getTransactions;
  },
  methods: {
    searchTransaction() {
      if (this.searchInput !== "") {
        this.items = this.getTransactions.filter(
          (item) =>  {
            return String(item.customer).includes(String(this.searchInput))
          }
        );
      } else {
        this.items = this.getTransactions;
      }
    },
  },
  computed: {
    ...mapGetters({ getTransactions: "dashboard/getTransactions" }),
    rows() {
      return this.getTransactions.length;
    },
  },
};
</script>
<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex flex-wrap justify-content-between">
      <div></div>
      <div class="search-box">
        <input
          type="text"
          v-model="searchInput"
          class="search-input"
          placeholder="search..."
          @keyup="searchTransaction"
        />
        <span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <div
      class="bg-blueish rounded d-flex flex-column justify-content-between gap-2 h-500"
    >
      <Table
        :items="items"
        :fields="fields"
        per-page="8"
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
          per-page="8"
          align="right"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

>

<style scoped>
.search-box {
  background-color: inherit !important;
  border-bottom: 1px solid;
  border-radius: 0;
}
</style>
