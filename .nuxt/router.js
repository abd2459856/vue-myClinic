import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28d57192 = () => interopDefault(import('../pages/customer/index.vue' /* webpackChunkName: "pages/customer/index" */))
const _55bbd2b8 = () => interopDefault(import('../pages/doctor/index.vue' /* webpackChunkName: "pages/doctor/index" */))
const _07966474 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _fe3b087a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _34848147 = () => interopDefault(import('../pages/customer/Details.vue' /* webpackChunkName: "pages/customer/Details" */))
const _5257fcdb = () => interopDefault(import('../pages/customer/details2.vue' /* webpackChunkName: "pages/customer/details2" */))
const _8f7be5a4 = () => interopDefault(import('../pages/customer/Profile.vue' /* webpackChunkName: "pages/customer/Profile" */))
const _00ac76ec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/myclinic/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/customer",
    component: _28d57192,
    name: "customer"
  }, {
    path: "/doctor",
    component: _55bbd2b8,
    name: "doctor"
  }, {
    path: "/inspire",
    component: _07966474,
    name: "inspire"
  }, {
    path: "/profile",
    component: _fe3b087a,
    name: "profile"
  }, {
    path: "/customer/Details",
    component: _34848147,
    name: "customer-Details"
  }, {
    path: "/customer/details2",
    component: _5257fcdb,
    name: "customer-details2"
  }, {
    path: "/customer/Profile",
    component: _8f7be5a4,
    name: "customer-Profile"
  }, {
    path: "/",
    component: _00ac76ec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
