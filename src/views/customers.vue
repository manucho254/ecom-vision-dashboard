<script>
import Table from "@/components/tableComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "customersView",
  components: { Table },
  data: () => {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "email", sortable: true },
        { key: "phone_number", sortable: true },
        { key: "country", sortable: true },
        { key: "occupation", sortable: true },
        { key: "role", sortable: true },
      ],
      items: [],
      currentPage: 1,
      searchInput: "",
    };
  },
  mounted() {
    this.$store.dispatch("dashboard/fetchCustomers");
    this.items = this.getCustomers;
  },
  methods: {
    searchCustomer() {
      if (this.searchInput !== "") {
        this.items = this.getCustomers.filter(
          (item) =>  {
            return String(item.name).includes(String(this.searchInput))
          }
        );
      } else {
        this.items = this.getCustomers;
      }
    },
  },
  computed: {
    ...mapGetters({ getCustomers: "dashboard/getCustomers" }),
    rows() {
      return this.getCustomers.length;
    },
  },
};
</script>
<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex justify-content-end">
      <div class="search-box">
        <input
          @keyup="searchCustomer"
          type="text"
          v-model="searchInput"
          class="search-input"
          placeholder="search..."
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

<style scoped>
.search-box {
  background-color: inherit !important;
  border-bottom: 1px solid;
  border-radius: 0;
}
</style>
