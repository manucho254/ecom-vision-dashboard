import { usersData,  products } from "@/dummyData/data"

export default{
    fetchCustomers({commit}) {
        return new Promise((resolve, reject) => {
            commit("setCustomers", usersData)
            resolve()
            console.log(reject)

        })
    },
    fetchProducts({commit}) {
        return new Promise((resolve, reject) => {
            commit("setProducts", products)
            resolve()
            console.log(reject)
        })
    }
}