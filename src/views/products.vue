<script>
import Loader from "@/components/loadingComponent.vue";
export default {
  name: "ProductsView",
  components: { Loader },
  data: () => {
    return {
      products: [
        {
          user: "port Beckley",
          category: "clothing",
          price: 3030.23,
          message: "testing this",
        },
        {
          user: "Killy  Fidian",
          category: "accessories",
          price: 300.23,
          message: "testing this",
        },
        {
          user: "Federica Pieper",
          category: "clothing",
          price: 2327.23,
          message: "testing this",
        },
        {
          user: "Solomon Ferendez",
          category: "misc",
          price: 942.23,
          message: "testing this",
        },
        {
          user: "Moyna Barkinshow",
          category: "shoes",
          price: 2514.23,
          message: "testing this",
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <Loader v-if="products.length < 0" />
    <div class="row g-2">
      <div class="col-md-3" v-for="(product, index) in products" :key="index">
        <div class="card bg-blueish p-2">
          <span class="text-sm text-secondary">{{ product.category }}</span>
          <span class="text-mid">{{ product.user }}</span>
          <span class="text-sm text-gold mb-3"> $ {{ product.price }}</span>
          <span>
            <i class="text-sm text-orange fa fa-star"></i>
            <i class="text-sm text-orange fa fa-star"></i>
            <i class="text-sm text-orange fa fa-star"></i>
            <i class="text-sm text-orange fa fa-star"></i>
            <i class="text-sm fa fa-star"></i>
          </span>
          <p class="text-sm">{{ product.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
