<script>
export default {
  name: "sidebar",
  data: () => {
    return {
      resizeSidebar: false,
      activeItem: "",
      pieChart: require("@/assets/pie-chart.svg"),
    };
  },
  methods: {
    toggleItem(item) {
      this.activeItem = item;
    },
    pushTo(routePath) {
      this.$router.push(`/${routePath}`);
    },
    toggleSidebar() {
      if (this.resizeSidebar === true) {
        this.resizeSidebar = false;
      } else {
        this.resizeSidebar = true;
      }
    },
  },
};
</script>

<template>
  <div>
    <aside v-if="!resizeSidebar" class="sidebar pt-3">
      <div class="sidebar-items">
        <div class="text-start sidebar-header">ECOMVISION</div>

        <router-link
          class="sidebar-item mb-2"
          to="/dashboard"
          @click="toggleItem('dashboard')"
          :class="{ active: activeItem == 'dashboard' }"
        >
          <i class="fa fa-house"></i>
          Dashboard
        </router-link>

        <span class="sidebar-title">Client Facing</span>

        <router-link
          class="sidebar-item"
          to="/products"
          @click="toggleItem('products')"
          :class="{ active: activeItem == 'products' }"
        >
          <i class="fa fa-light fa-shopping-cart"></i>
          Products
        </router-link>

        <router-link
          class="sidebar-item"
          to="/customers"
          @click="toggleItem('customers')"
          :class="{ active: activeItem == 'customers' }"
        >
          <i class="fa fa-users"></i>
          Customers
        </router-link>

        <router-link
          class="sidebar-item"
          to="/transactions"
          @click="toggleItem('transactions')"
          :class="{ active: activeItem == 'transactions' }"
        >
          <b-icon icon="briefcase-fill"></b-icon>
          Transactions
        </router-link>

        <router-link
          class="sidebar-item router-link"
          to="/geography"
          @click="toggleItem('geography')"
          :class="{ active: activeItem == 'geography' }"
        >
          <i class="fa fa-globe-africa"></i>
          Geography
        </router-link>

        <span class="sidebar-title">Sales</span>

        <router-link
          class="sidebar-item router-link"
          to="/overview"
          @click="toggleItem('overview')"
          :class="{ active: activeItem == 'overview' }"
        >
          <i class="fa fa-solid fa-users"></i>
          Overview
        </router-link>

        <router-link
          class="sidebar-item router-link"
          to="/daily-sales"
          @click="toggleItem('daily')"
          :class="{ active: activeItem == 'daily' }"
        >
          <i class="fa fa-calendar-day"></i>
          Daily
        </router-link>

        <router-link
          class="sidebar-item router-link"
          @click="toggleItem('monthly')"
          :class="{ active: activeItem == 'monthly' }"
          to="/monthly-sales"
        >
          <i class="fa fa-calendar-alt"></i>
          Monthly
        </router-link>

        <router-link
          class="sidebar-item router-link"
          @click="toggleItem('breakdown')"
          :class="{ active: activeItem == 'breakdown' }"
          to="/breakdown"
        >
          <b-icon icon="pie-chart"></b-icon>
          Breakdown
        </router-link>

        <span class="sidebar-title">Management</span>

        <router-link
          class="sidebar-item router-link"
          @click="toggleItem('admin')"
          :class="{ active: activeItem == 'admin' }"
          to="/admin"
        >
          <i class="fa fa-shield"></i>
          Admin
        </router-link>

        <router-link
          class="sidebar-item router-link"
          to="/performance"
          @click="toggleItem('performance')"
          :class="{ active: activeItem == 'performance' }"
        >
          <b-icon icon="gear-fill"></b-icon>
          Performance
        </router-link>
      </div>
      <div class="sidebar-footer">
        <span
          @click="pushTo('settings')"
          class="d-flex gap-2 align-items-center text-decoration-none text-light bg-blueish"
        >
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
    </aside>
  </div>
</template>
