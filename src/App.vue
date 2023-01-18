<template>
  <div>
    <div v-if="loading">
      <router-view />
    </div>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 100vh;"
      v-else
    >
      <span class="page-loader"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.loading = !this.loading;
    });
  },
};
</script>

<style lang="scss">
.page-link {
  border-radius: 30px !important;
  width: 30px;
  height: 30px;
  margin: 0 2px;
  border: none !important;
  background-color: transparent !important;
  color: rgb(215, 222, 230) !important;
  font-size: 18px;
  box-shadow: none !important;
  outline: none !important;
  padding: 5px;
}

.page-link:hover {
  color: rgb(230, 230, 230) !important;
}

.active {
  background-color: rgb(52, 44, 116) !important;
  color: rgb(255, 248, 248) !important;
  border-radius: 48%;
}

tbody tr:hover {
  background: rgb(225, 225, 237);
  opacity: 0.5;
  cursor: pointer;
}
</style>
>
