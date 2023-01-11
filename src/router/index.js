import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"


Vue.use(VueRouter)

let is_authenticated = true
document.title = 'Ecomvision'

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  document.title = `Ecomvision ${to.name}`

  if (is_authenticated) {
    next()
  }else{
    next("/login")
  }
})

export default router
