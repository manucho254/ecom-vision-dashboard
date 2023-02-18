import { admins, customers, products, transactions } from "@/dummyData/data";

export default {
  fetchCustomers({ commit }) {
    return new Promise((resolve, reject) => {
      commit("setCustomers", customers);
      resolve();
      console.log(reject);
    });
  },
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      commit("setProducts", products);
      resolve();
      console.log(reject);
    });
  },
  fetchTransactions({ commit }) {
    return new Promise((resolve, reject) => {
      commit("setTransactions", transactions);
      resolve();
      console.log(reject);
    });
  },
  fetchAdmins({ commit }) {
    return new Promise((resolve, reject) => {
      commit("setAdmins", admins);
      resolve();
      console.log(reject);
    });
  },
};
