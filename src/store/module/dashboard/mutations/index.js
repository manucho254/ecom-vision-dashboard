export default {
  setProducts(state, payload) {
    state.products = payload;
  },
  setCustomers(state, payload) {
    state.customers = payload;
  },
  setTransactions(state, payload) {
    state.transactions = payload;
  },
  setAdmins(state, payload) {
    state.admins = payload;
  },
};
