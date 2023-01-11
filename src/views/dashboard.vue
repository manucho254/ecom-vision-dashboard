<script>
import SideBar from "@/components/sideBar.vue";
import TopNav from "@/components/topNav.vue";
import Dash from "@/components/dash.vue";

export default {
  name: "mainPage",
  components: { SideBar, TopNav, Dash },
  data: () => {
    return {
      pageTitle: "",
    };
  },
};
</script>

<template>
  <div class="d-flex">
    <SideBar />
    <div class="w-100">
      <TopNav />
      <div class="main px-3">
        <Dash v-if="$route.name === 'Dashboard'" />
        <router-view />
      </div>
    </div>
  </div>
</template>
