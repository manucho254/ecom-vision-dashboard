<script>
import PageMessage from "@/components/pageMessageComponent.vue";
import pageTheme from "@/components/pageThemeComponent.vue";
export default {
  name: "topNavComponent",
  components: { PageMessage, pageTheme },
  data: () => {
    return {
      show: false,
      dropDownShow: false,
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
    dropDownToggle() {
      this.dropDownShow = !this.dropDownShow;
    },
    pushTo(urlPath) {
      this.$router.push(urlPath);
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
        <pageTheme/>
        <span class="cursor-pointer" @click="pushTo('/settings')">
          <i class="fa fa-gear"></i>
        </span>
        <div>
          <b-dropdown block class="m-md-2" variant="bg-blueish" no-caret>
            <template #button-content>
              <span class="d-flex drop gap-2 align-items-center text-light">
                <img
                  class="profile-avatar cursor-pointer"
                  src="@/assets/logo.png"
                  alt="profile avatar"
                />
                <span class="d-flex flex-column cursor-pointer">
                  <span class="font-bold">Manucho</span>
                  <span class="font-sm">Pharmacist</span>
                </span>
              </span>
            </template>
            <b-dropdown-item>
              <i class="fa fa-user"></i> Profile
            </b-dropdown-item>
            <b-dropdown-item @click="pushTo('/auth/login')"
              ><i class="fa fa-sign-out"></i> Logout
            </b-dropdown-item>
          </b-dropdown>
        </div>
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

<style></style>
