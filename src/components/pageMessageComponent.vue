<template>
  <div class="pb-2">
    <span class="text-gold"> {{ pageMessage[getRouteName] }}</span>
  </div>
</template>

<script>
export default {
  name: "pageMessageComponent",
  data: () => {
    return {
      routeName: "",
      pageMessage: {
        Dashboard: "Welcome to your dashboard",
        Products: "See your list of products",
        Customers: "List of customers",
        Transactions: "Entire list of transactions",
        Geography: "Find where your users are located",
        Admin: "Managing admins and list of admins",
        Breakdown: "Breakdown of sales by category",
        Daily: "chart of daily sales",
        Monthly: "chart of monthly sales",
        Performance: "Track your affiliate sales performance here",
        Overview: "Overview of general revenue and profit",
      },
    };
  },
  computed: {
    getRouteName() {
      return this.$route.name;
    },
  },
};
</script>
