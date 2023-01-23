<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PageThemeComponent",
  methods: {
    ...mapMutations({ updateTheme: "layout/updateTheme" }),
    darkModeToggle() {
      let sideBar = document.querySelector(".sidebar");
      let body = document.querySelector("body");
      let searchBox = document.querySelector(".search-box");
      let table = document.querySelector("table");
      let drop = document.querySelector(".drop");

      if (this.getTheme === "dark") {
        this.updateTheme("light");
        body.classList.add("body-color");
        sideBar.classList.add("sidebar-color");
        searchBox.classList.add("search");
        if (table) table.classList.add("table-light");
        drop.classList.add("text-dark");
        drop.classList.remove("text-light");
      } else {
        this.updateTheme("dark");
        body.classList.remove("body-color");
        sideBar.classList.remove("sidebar-color");
        searchBox.classList.remove("search");
        if (table) table.classList.remove("table-light");
        drop.classList.remove("text-dark");
        drop.classList.add("text-light");
      }
    },
  },
  computed: {
    ...mapGetters({ getTheme: "layout/getTheme" }),
  },
};
</script>

<template>
  <span class="cursor-pointer" @click="darkModeToggle">
    <i v-if="this.getTheme === 'light'" class="fa fa-moon"></i>
    <i v-if="this.getTheme === 'dark'" class="fa fa-sun"></i>
  </span>
</template>
