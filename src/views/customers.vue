<script>
import Table from "@/components/tableComponent.vue";
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
      items: [
        {
          id: 123,
          name: "manucho",
          email: "test@g.com",
          phone_number: "+25476263629",
          country: "KE",
          occupation: "Developer",
          role: "admin",
        },
        {
          id: 121,
          name: "manucho",
          email: "test@g.com",
          phone_number: "+25476263629",
          country: "KE",
          occupation: "Developer",
          role: "admin",
        },
        {
          id: 125,
          name: "manucho",
          email: "test@g.com",
          phone_number: "+25476263629",
          country: "KE",
          occupation: "Developer",
          role: "admin",
        },
        {
          id: 191,
          name: "manucho",
          email: "test@g.com",
          phone_number: "+25476263629",
          country: "KE",
          occupation: "Developer",
          role: "admin",
        },
      ],
      currentPage: 1,
      searchInput: "",
    };
  },
  methods: {
    searchCustomer() {
      if (this.searchInput !== "" || this.searchInput !== null) {
        this.items.filter((item) =>
          String(item.cost).includes(String(this.searchInput))
        );
      }
    },
  },
  computed: {
    rows() {
      return this.items.length;
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
    <div class="bg-blueish rounded">
      <Table
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
