import {user} from "@/dummyData/data"

export default {
    fetchUser({commit}) {
        return new Promise((resolve, reject) => {
            commit("setUser", user)
            resolve()
            console.log(reject)
        })
    }
}