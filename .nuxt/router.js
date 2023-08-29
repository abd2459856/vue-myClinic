import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd9b63de = () => interopDefault(import('..\\pages\\cstomer\\index.vue' /* webpackChunkName: "pages/cstomer/index" */))
const _b9ec98c8 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _12098cbe = () => interopDefault(import('..\\pages\\cstomer\\Details.vue' /* webpackChunkName: "pages/cstomer/Details" */))
const _1b797014 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cstomer",
    component: _bd9b63de,
    name: "cstomer"
  }, {
    path: "/inspire",
    component: _b9ec98c8,
    name: "inspire"
  }, {
    path: "/cstomer/Details",
    component: _12098cbe,
    name: "cstomer-Details"
  }, {
    path: "/",
    component: _1b797014,
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
