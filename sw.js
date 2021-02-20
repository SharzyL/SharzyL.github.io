/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7e2c70ac5828b774c09c.js"
  },
  {
    "url": "framework-741ade27086b2708e961.js"
  },
  {
    "url": "app-7571111c5b2363456119.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a3447ed301caa6cd059547c9668ad630"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js"
  },
  {
    "url": "polyfill-f89c5f37b65dee400010.js"
  },
  {
    "url": "styles.da22e7e36de819cd9a92.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "component---src-templates-blog-post-tsx-0b239e03c49a75143bdd.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "da055b51ddbf15a788261abe42b54473"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0f97593e02e539dcf8de453c5d20da96"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5a30a23536a356a9e936f7babcf1a4e8"
  },
  {
    "url": "page-data/posts/2019-08-01-sensitivity/page-data.json",
    "revision": "dd7e5b7c03dbc48bc6361c39b8389261"
  },
  {
    "url": "page-data/posts/2019-08-04-uniform/page-data.json",
    "revision": "3d53c4629067ef6d8b55aef803beb2a1"
  },
  {
    "url": "page-data/posts/2019-08-06-bx/page-data.json",
    "revision": "f5d204af0ea66e0900fdd22a051aa44f"
  },
  {
    "url": "page-data/posts/2019-08-08-pitfall/page-data.json",
    "revision": "65b3bf630e75c3ed1645132bc995c9e4"
  },
  {
    "url": "page-data/posts/2019-10-24-latex-tool/page-data.json",
    "revision": "f7ed812cf8dd6dd64efcfda43cb705da"
  },
  {
    "url": "page-data/posts/2019-11-10-triangle-short-art/page-data.json",
    "revision": "348f286df608e91adecf8f50014e9d79"
  },
  {
    "url": "page-data/posts/2019-11-15-neural-network-theory/page-data.json",
    "revision": "687d9451490c9f9c31870f49ae7b38fd"
  },
  {
    "url": "page-data/posts/2019-12-19-structured-light/page-data.json",
    "revision": "800b1fc796d33935e597829181fb3221"
  },
  {
    "url": "page-data/posts/2020-01-08-distributed-dl/page-data.json",
    "revision": "4e10975e871f45c87cc5aab56d0e7c5a"
  },
  {
    "url": "page-data/posts/2020-01-08-latex-flow/page-data.json",
    "revision": "93229eefdd47dd48694fb3c9f8bf7cbe"
  },
  {
    "url": "page-data/posts/2020-01-09-submodular/page-data.json",
    "revision": "b98e9d43a4ed19771278299ad09c0042"
  },
  {
    "url": "page-data/posts/2020-02-04-cjk-helper/page-data.json",
    "revision": "c77e00fc33ecaa9fab64a7b5b0c12d2f"
  },
  {
    "url": "page-data/posts/2020-06-21-computer-history/page-data.json",
    "revision": "1bb5b2fba24a98f541bc72d29eadedfa"
  },
  {
    "url": "page-data/posts/2020-07-11-search-algorithm/page-data.json",
    "revision": "c95b7a40344a87160dee761417bfef25"
  },
  {
    "url": "page-data/posts/2020-08-15-FELT/page-data.json",
    "revision": "798121245fec7b2bc96242e340b1f48d"
  },
  {
    "url": "page-data/posts/2020-12-06-rock-live/page-data.json",
    "revision": "36ee5d13c66f8adafcf27f9b96cb9d61"
  },
  {
    "url": "page-data/posts/2021-02-05-gatsby-rebuild/page-data.json",
    "revision": "0350af57fa91474327f75e0dd5f96c89"
  },
  {
    "url": "page-data/posts/2021-02-16-latex-done-wrong/page-data.json",
    "revision": "c8cc3a99edc4baa26f2a72c0489218f3"
  },
  {
    "url": "component---src-pages-blog-tsx-a33afc4baf64295db60b.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "b15c5608a1f5fdc454f90fc84cb4bffd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1c4fa4d29db7ebd4cf1bd0f762a953aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-7571111c5b2363456119.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
