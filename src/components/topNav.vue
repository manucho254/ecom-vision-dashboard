<script>
import PageMessage from "@/components/pageMessageComponent.vue";
export default {
  name: "topNavComponent",
  components: { PageMessage },
  data: () => {
    return {
      colorMode: "",
    };
  },
  methods: {
    toggleSideBar() {
      let sideBar = document.querySelector(".sidebar");
      if (sideBar.style.display != "none") {
        sideBar.style.display = "none";
      } else {
        sideBar.style.display = "flex";
      }
    },
    darkModeToggle() {},
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
        <span class="cursor-pointer">
          <i
            v-if="colorMode === ''"
            @click="darkModeToggle"
            class="fa fa-moon"
          ></i>
          <i
            v-if="colorMode === 'dark'"
            @click="darkModeToggle"
            class="fa fa-sun"
          ></i>
        </span>
        <span class="cursor-pointer">
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
