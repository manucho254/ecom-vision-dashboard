<script>
export default {
  name: "tableComponent",
  props: {
    items: {
      required: true,
    },
    fields: {
      required: true,
    },
    perPage: {
      required: false,
    },
    currentPage: {
      required: false,
    },
  },
  data: () => {
    return {
      sortDesc: false,
    };
  },
};
</script>
<template>
  <div>
    <b-table class="table-responsive"
      responsive
      :items="items"
      :fields="fields"
      :sort-desc.sync="sortDesc"
      hover
      show-empty
      :per-page="perPage"
      :current-page="currentPage"
    >
    </b-table>
  </div>
</template>

<style scoped>

.t-row:hover {
  background-color: rgb(221, 221, 244);
  color: rgb(136, 120, 120) !important;
}

.r-col {
  background: rgb(221, 221, 244) !important;
  opacity: 0.6 !important;
}

.bg-light:hover {
  opacity: 0.6;
}
</style>
