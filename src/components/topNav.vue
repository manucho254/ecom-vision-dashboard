<script>
import PageMessage from "@/components/pageMessageComponent.vue";
export default {
  name: "topNavComponent",
  components: { PageMessage },
  data: () => {
    return {
      colorMode: "dark",
      show: false,
    };
  },
  methods: {
    toggleSideBar() {
      let sideBar = document.querySelector(".sidebar");
      if (sideBar.style.display !== "none") {
        sideBar.style.display = "none";
      } else {
        sideBar.style.display = "flex";
      }
    },
    pushTo() {
      this.$router.push("/settings");
    },
    darkModeToggle() {
      let sideBar = document.querySelector(".sidebar");
      let body = document.querySelector("body");
      let searchBox = document.querySelector(".search-box");
      let table = document.querySelector("table");

      if (this.colorMode === "dark") {
        this.colorMode = "light";
        body.classList.add("body-color");
        sideBar.classList.add("sidebar-color");
        searchBox.classList.add("search");
        table.classList.add("table-light");
      } else {
        this.colorMode = "dark";
        body.classList.remove("body-color");
        sideBar.classList.remove("sidebar-color");
        searchBox.classList.remove("search");
        table.classList.remove("table-light");
      }
    },
  },
};
</script>

<template>
  <div class="px-3">
    <div class="d-flex justify-content-between mt-2">
      <div class="d-flex align-items-center gap-3 flex-wrap">
        <span class="cursor-pointer" @click="toggleSideBar">
          <i class="fa fa-light fa-bars"></i>
        </span>
        <div class="search-box">
          <input type="text" class="search-input" placeholder="search..." />
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
      <div class="d-flex align-items-center gap-4">
        <span class="cursor-pointer" @click="darkModeToggle">
          <i v-if="colorMode === 'light'" class="fa fa-moon"></i>
          <i v-if="colorMode === 'dark'" class="fa fa-sun"></i>
        </span>
        <span class="cursor-pointer" @click="pushTo">
          <i class="fa fa-gear"></i>
        </span>
        <span class="d-flex gap-2 align-items-center">
          <img
            class="profile-avatar cursor-pointer"
            src="@/assets/logo.png"
            alt="profile avatar"
          />
          <span class="d-flex flex-column cursor-pointer">
            <span class="font-bold">Shelly</span>
            <span class="font-sm">Pharmacist</span>
          </span>
        </span>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <div class="d-flex flex-column">
        <span class="text-uppercase font-bold h4">{{ $route.name }}</span>
        <PageMessage />
      </div>
      <button
        v-if="$route.name === 'Dashboard'"
        class="button-report bg-gold text-dark"
      >
        <i class="fa fa-download"></i>
        Download Reports
      </button>
    </div>
  </div>
</template>

<style>
.body-color {
  background-color: rgb(232, 231, 231) !important;
  color: black !important;
}

.sidebar-color {
  background-color: rgb(240, 240, 240) !important;
  color: black !important;
}

.sidebar-color .sidebar-items .sidebar-item {
  color: black !important;
}

.sidebar-color span {
  color: black !important;
}

.sidebar-color .sidebar-item:hover {
  color: #fff !important;
  background-color: #434343;
  cursor: pointer;
}

.sidebar-color .sidebar-footer span {
  background-color: inherit;
}

.search {
  background-color: rgb(248, 247, 247) !important;
}
.search .search-input {
  color: black !important;
}

.body-color table {
  background-color: #fff !important;
}

.body-color table thead {
  background-color: #fff !important;
  color: rgb(24, 24, 24) !important;
}

.body-color table tbody {
  background-color: #fff !important;
  color: rgb(24, 24, 24) !important;
}

.body-color .search-box {
  background-color: #fff !important;
  color: rgb(24, 24, 24) !important;
}

.body-color input {
  color: rgb(24, 24, 24) !important;
}

.body-color .card {
  background-color: #fff !important;
  color: rgb(24, 24, 24) !important;
}

.body-color .bg-blueish {
  background-color: #fff;
  color: rgb(24, 24, 24) !important;
}
</style>
