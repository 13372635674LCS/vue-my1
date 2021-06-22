import Vue from 'vue'
import Router from 'vue-router'
import my1 from "../components/my1.vue"
import my2 from "../components/my2.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/my1",
      name:"my1",
      component:my1
    },
    {
      path:"/my2",
      name:"my2",
      component:my2
    }
  ]
})
