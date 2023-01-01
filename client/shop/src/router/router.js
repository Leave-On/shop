import { useUserStore } from '../stores/userStore'
import {createRouter, createWebHistory} from 'vue-router'
import Shop from '../pages/Shop.vue'
import Admin from '../pages/Admin.vue'
import DevicePage from '../pages/DevicePage.vue'
import Auth from '../pages/Auth.vue'
import Cart from '../pages/Cart.vue'


const requireAuth = (to, from, next) => {
  const userStore = useUserStore()  
  if (userStore.isAuth) {
    next()
  } 
  else {
     next({name: 'shop'})
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'admin',
      path: '/admin',
      component: Admin,
      beforeEnter: requireAuth
    },
    {
      name: 'shop',
      path: '/',
      component: Shop
    },
    {
      name: 'devicePage',
      path: '/devicePage' + '/:id',
      component: DevicePage,
      props: true
    },
    {
      name: 'login',
      path: '/login',
      component: Auth
    },
    {
      name: 'registration',
      path: '/registration',
      component: Auth
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart
    }
  ]
})


router.beforeEach((to, from, next) => {     // experimental
  const userStore = useUserStore()
  if(userStore) {
    if (!to.matched.length) next({name: 'shop'})
    else next()
  }
})

export default router 