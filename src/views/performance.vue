<script>
import Table from "@/components/tableComponent.vue";
export default {
  name: "performanceView",
  components: { Table },
  data: () => {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "userid", sortable: true },
        { key: "createdat", sortable: true },
        { key: "ofproducts", sortable: true },
        { key: "cost", sortable: true },
      ],
      items: [
        {
          id: 120,
          userid: 20,
          createdat: "test@g.com",
          ofproducts: "+25476263629",
          cost: 230,
        },
        {
          id: 121,
          userid: 21,
          createdat: "test@g.com",
          ofproducts: "+25476263629",
          cost: 200,
        },
        {
          id: 122,
          userid: 22,
          createdat: "test@g.com",
          ofproducts: "+25476263629",
          cost: 320,
        },
        {
          id: 12,
          userid: 23,
          createdat: "test@g.com",
          ofproducts: "+25476263629",
          cost: 333,
        },
      ],
      currentPage: 1,
      searchInput: "",
    };
  },
  methods: {
    searchPerformance() {
      if (this.searchInput !== "" || this.searchInput !== null) {
        this.items = this.items.filter((item) =>
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
          type="text"
          v-model="searchInput"
          class="search-input"
          placeholder="search..."
          @keyup="searchPerformance"
        />
        <span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
    <div class="bg-blueish rounded d-flex flex-column justify-content-between gap-2 h-500">
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
