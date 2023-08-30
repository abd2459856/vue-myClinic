import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5bda4dec = () => interopDefault(import('../pages/cstomer/index.vue' /* webpackChunkName: "pages/cstomer/index" */))
const _07966474 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _b0baa288 = () => interopDefault(import('../pages/cstomer/Details.vue' /* webpackChunkName: "pages/cstomer/Details" */))
const _4ccad226 = () => interopDefault(import('../pages/cstomer/Details2.vue' /* webpackChunkName: "pages/cstomer/Details2" */))
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
    path: "/cstomer",
    component: _5bda4dec,
    name: "cstomer"
  }, {
    path: "/inspire",
    component: _07966474,
    name: "inspire"
  }, {
    path: "/cstomer/Details",
    component: _b0baa288,
    name: "cstomer-Details"
  }, {
    path: "/cstomer/Details2",
    component: _4ccad226,
    name: "cstomer-Details2"
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
