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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f04ec67fe6f5b73b870943d30bfba2f"
  },
  {
    "url": "about/contact.html",
    "revision": "3d512d508de78785384dc2c5007dbcca"
  },
  {
    "url": "about/contributing.html",
    "revision": "cddc9c843bb8505fc986b0c4d493fd34"
  },
  {
    "url": "about/index.html",
    "revision": "698cdd8dd48fdb78c9e80dfba080cb15"
  },
  {
    "url": "about/license.html",
    "revision": "15e0c777ec2e11707cf0f68bf1584634"
  },
  {
    "url": "about/roadmap.html",
    "revision": "bb657c2709db7dfb006dc0801a7c356e"
  },
  {
    "url": "api/core/application.html",
    "revision": "64fc7ed3de592433e54f79b15ccd7441"
  },
  {
    "url": "api/core/components.html",
    "revision": "fde6655e9baa86e6fd6049718520351c"
  },
  {
    "url": "api/core/hooks.html",
    "revision": "feb4378088e472666a3eaaa96413e43b"
  },
  {
    "url": "api/core/index.html",
    "revision": "c4d3534b8d062a01392c52e45f6fa96c"
  },
  {
    "url": "api/core/mixins.html",
    "revision": "d4f70abcc69be4e84efd27176a255e25"
  },
  {
    "url": "api/core/services.html",
    "revision": "1cb833a0d353519e854f2c7b71d55ab4"
  },
  {
    "url": "api/index.html",
    "revision": "15724b93ef1ff35bf1ff426ce0cfaddc"
  },
  {
    "url": "api/map/components.html",
    "revision": "88f77688de13ef4da1347a30977302df"
  },
  {
    "url": "api/map/globe-mixins.html",
    "revision": "671be909906227308c2772aea17dded3"
  },
  {
    "url": "api/map/hooks.html",
    "revision": "4ad581ea77116a300bb9f9c964ad5e48"
  },
  {
    "url": "api/map/index.html",
    "revision": "9a0665ea132eae639f148d65fe12476d"
  },
  {
    "url": "api/map/map-mixins.html",
    "revision": "859522bbfd43973799ed79c38c81b8c4"
  },
  {
    "url": "api/map/mixins.html",
    "revision": "be05c7ba5f90a65d8a1d9faef4e88147"
  },
  {
    "url": "api/map/services.html",
    "revision": "3315ac19ad0ed9154d4128f3e9820638"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "4b9377c312c00c81d498ca11445e81a5"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "60fe805d5715699acd7aeb69c6eefa37"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "321ffc4afefa5579a2946cea97e7cb2f"
  },
  {
    "url": "architecture/index.html",
    "revision": "4e204b925c70edd50169d3a7d8b9a896"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "fbc0451473dc0d6e0e3287c47d942d58"
  },
  {
    "url": "assets/css/0.styles.d338d316.css",
    "revision": "6fc5034b17fcea0914076f16b2ba26aa"
  },
  {
    "url": "assets/img/aggregated-feature-data-model.688823b1.png",
    "revision": "688823b1d38b25a2bf17ca95920def55"
  },
  {
    "url": "assets/img/aktnmap-layout.7dce3192.png",
    "revision": "7dce31929edd640a0491536514cbe7b9"
  },
  {
    "url": "assets/img/alert-data-model.77595bb5.png",
    "revision": "77595bb53c67ef3aa32e8455a15f4cd0"
  },
  {
    "url": "assets/img/application-hooks.e15ca2e0.svg",
    "revision": "e15ca2e0e0ce1b30ac2716348e14cc33"
  },
  {
    "url": "assets/img/catalog-data-model.998b319c.png",
    "revision": "998b319c85f0c564838fe6886a1aa5b3"
  },
  {
    "url": "assets/img/cd-pipeline-android.aac6a2e0.svg",
    "revision": "aac6a2e0ae4e0a08d62434fc4f9e700c"
  },
  {
    "url": "assets/img/cd-pipeline-app.f5ae4922.svg",
    "revision": "f5ae4922e9e2a5263b805ee8a1cd1779"
  },
  {
    "url": "assets/img/cd-pipeline-env.e2075fb1.svg",
    "revision": "e2075fb1bb069e7f46ea7f0a880df06b"
  },
  {
    "url": "assets/img/cd-pipeline-global.bf86d245.svg",
    "revision": "bf86d245695e16937bf9f6e08c38b0ad"
  },
  {
    "url": "assets/img/cd-pipeline-ios.b4f66a54.svg",
    "revision": "b4f66a5494f77e98899d44a066515ed0"
  },
  {
    "url": "assets/img/cd-pipeline-travis.5e40ee62.svg",
    "revision": "5e40ee62f8c213080bcd46106366ccbd"
  },
  {
    "url": "assets/img/component-view.de49f2d5.png",
    "revision": "de49f2d54005249f92b47c78e46776cc"
  },
  {
    "url": "assets/img/domain-model.0547d09f.svg",
    "revision": "0547d09ff803394e1f2d859c04728556"
  },
  {
    "url": "assets/img/editor-lifecycle.174bae43.png",
    "revision": "174bae432562fed4c258bc985253d0ac"
  },
  {
    "url": "assets/img/feature-data-model.de64ed49.png",
    "revision": "de64ed4936ffd7dc5ee67482f140cbba"
  },
  {
    "url": "assets/img/global-architecture.62f2e9b2.svg",
    "revision": "62f2e9b23f59d325b00376982b49ea43"
  },
  {
    "url": "assets/img/groups-data-model.437e9630.svg",
    "revision": "437e963022b899ff09e989224a42ba90"
  },
  {
    "url": "assets/img/hooks-diagram-template.bf7579e1.png",
    "revision": "bf7579e1f6e36a2f9585242446149c20"
  },
  {
    "url": "assets/img/item-collections.59bf2c4c.png",
    "revision": "59bf2c4c802c8fc5c68c359ecfa95398"
  },
  {
    "url": "assets/img/kano-3D.65e359f9.png",
    "revision": "65e359f95783bb99097fc5b763ec4151"
  },
  {
    "url": "assets/img/kano-components.ad92b7e2.png",
    "revision": "ad92b7e2f4bf02c26bb9e24b67f19b11"
  },
  {
    "url": "assets/img/kano-layout.702937a9.png",
    "revision": "702937a910e38ce3e140ae86cbfd5b3c"
  },
  {
    "url": "assets/img/kano-weather.2b6d4bbf.png",
    "revision": "2b6d4bbfa0992bbbbaae5745b2a7db4b"
  },
  {
    "url": "assets/img/kdk-workspace.d228efd0.png",
    "revision": "d228efd0427f5ee0027e9557bf11f9c8"
  },
  {
    "url": "assets/img/layers-panel.def38fe5.png",
    "revision": "def38fe54ce12f8b11b1d523eeacbaec"
  },
  {
    "url": "assets/img/marker-cluster-2D.63ae3032.png",
    "revision": "63ae3032f9266059c3d95ccb402b0608"
  },
  {
    "url": "assets/img/marker-cluster-3D.e8927429.png",
    "revision": "e892742919b7d249bada3f31153e11fa"
  },
  {
    "url": "assets/img/organizations-data-model.0d40de04.svg",
    "revision": "0d40de04d4ac06c438ad08de62bdbf6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/timeseries.370f7197.png",
    "revision": "370f7197130302dce62fdcd4d3be49ea"
  },
  {
    "url": "assets/img/users-data-model.e037f5f6.svg",
    "revision": "e037f5f6dd66241e355c8f7b559237e4"
  },
  {
    "url": "assets/js/10.4b367e32.js",
    "revision": "ba5a01eeb9aac05112e050574f9a482f"
  },
  {
    "url": "assets/js/11.efd8aceb.js",
    "revision": "17100ea435b6e4750086ebadf644556e"
  },
  {
    "url": "assets/js/12.3890906e.js",
    "revision": "2588849b16f011e3fd91bcd9cd72022d"
  },
  {
    "url": "assets/js/13.71728aab.js",
    "revision": "26110789a2ddf67f4fb5fd0c71095de3"
  },
  {
    "url": "assets/js/14.8f8ff4a8.js",
    "revision": "56a1ddbd31d807ee9a1da1c2b2d2c99c"
  },
  {
    "url": "assets/js/15.5041e92b.js",
    "revision": "503bf4c87ecb348c1ee8531b8915ecd3"
  },
  {
    "url": "assets/js/16.3294fe10.js",
    "revision": "362bd2215ee9f1507ac313bd5cd44f85"
  },
  {
    "url": "assets/js/17.8f96e38a.js",
    "revision": "83bf079774b83306c642e72e4b775e4c"
  },
  {
    "url": "assets/js/18.0878dbfa.js",
    "revision": "37f50d93649a21f5c0a7dbbe4d48e0e5"
  },
  {
    "url": "assets/js/19.1a6ccc4b.js",
    "revision": "9aa2b0e29cc2dcb29e06aeb151842acb"
  },
  {
    "url": "assets/js/2.deee2b8b.js",
    "revision": "ad87f5efdb57f9bc4e80a8542842d240"
  },
  {
    "url": "assets/js/20.813b16ff.js",
    "revision": "6e5fcf10aa1dfd02967d77b182b606a7"
  },
  {
    "url": "assets/js/21.22a499ee.js",
    "revision": "8f1845fa201860ece3cae9b5ca62de7c"
  },
  {
    "url": "assets/js/22.48a5d9c1.js",
    "revision": "3ce12084eb0ccd6a92b54b067633b51b"
  },
  {
    "url": "assets/js/23.4707dbff.js",
    "revision": "234a69426aa6d7a58c359c5e71890e47"
  },
  {
    "url": "assets/js/24.cb159dff.js",
    "revision": "b84d8facb91b44e0cf5e4aa29c698967"
  },
  {
    "url": "assets/js/25.18688935.js",
    "revision": "8be279d94766d99f66604f8a09c90540"
  },
  {
    "url": "assets/js/26.c1de103c.js",
    "revision": "b082266b052ceb3de9c6151b6a1bedc0"
  },
  {
    "url": "assets/js/27.f5f9d776.js",
    "revision": "fd4f70e195ed793c530e7edc9126a0ce"
  },
  {
    "url": "assets/js/28.eefe9272.js",
    "revision": "20f095949afea739865dc8769e5cd7bf"
  },
  {
    "url": "assets/js/29.f11e7882.js",
    "revision": "5de1a527a2716148a0c407c8e450a06d"
  },
  {
    "url": "assets/js/3.e14f8819.js",
    "revision": "a9a0f89e46443e92ba377667e4bec978"
  },
  {
    "url": "assets/js/30.efa925c4.js",
    "revision": "8a9fa81abd6e0891ab88e46171c52280"
  },
  {
    "url": "assets/js/31.e6033c0a.js",
    "revision": "00c06a29c6f21c4dfabbfea0441e8e30"
  },
  {
    "url": "assets/js/32.920a3c95.js",
    "revision": "593c804708ca9dac5301575cb92e4dc7"
  },
  {
    "url": "assets/js/33.a64efa74.js",
    "revision": "0c0e9229b7ca1bb3e96a4f279fae0434"
  },
  {
    "url": "assets/js/34.e5301dab.js",
    "revision": "e93946a72ea3124b8c163c8be0ac0b34"
  },
  {
    "url": "assets/js/35.58f8be71.js",
    "revision": "094616c496811c8f6db77fd0d941c66a"
  },
  {
    "url": "assets/js/36.95a163bd.js",
    "revision": "7fe6908f8c301c4dfadd3ac6c42c36de"
  },
  {
    "url": "assets/js/37.d2e8e7a1.js",
    "revision": "a78b2b7d57412839bca68d15288900c8"
  },
  {
    "url": "assets/js/38.b351dfac.js",
    "revision": "afed6d8421b5ba1326be80ca5fab7132"
  },
  {
    "url": "assets/js/39.79d9ea8a.js",
    "revision": "81f352e351f50449f42c53ed641e015e"
  },
  {
    "url": "assets/js/4.f9ee2bfb.js",
    "revision": "0c62c4479d5a964d8672f40b36027bd9"
  },
  {
    "url": "assets/js/40.da9fd38e.js",
    "revision": "68c426de6706f6a552176f26c968ab5c"
  },
  {
    "url": "assets/js/41.ae726b12.js",
    "revision": "3f734c31b79d469d7307b6886da631fb"
  },
  {
    "url": "assets/js/42.5dbd2b72.js",
    "revision": "20ad3d6c1057defb471290de06a9acf7"
  },
  {
    "url": "assets/js/43.07172685.js",
    "revision": "bd40b4cacdc28e193c3f665dffe2a278"
  },
  {
    "url": "assets/js/44.4fca58e6.js",
    "revision": "5b8e7d6edba59b4a7fab91061d374141"
  },
  {
    "url": "assets/js/45.568e2210.js",
    "revision": "60c863be546250964a89fc44d3ac8cad"
  },
  {
    "url": "assets/js/46.d5c83e51.js",
    "revision": "5024e8a962240f4272c831054f1e8500"
  },
  {
    "url": "assets/js/47.65a69d15.js",
    "revision": "f6e1371b3ce3832b25ec2989f70ccb5f"
  },
  {
    "url": "assets/js/48.8049299d.js",
    "revision": "5f2d5bae90832424eb27177efe31a889"
  },
  {
    "url": "assets/js/49.feaf7c96.js",
    "revision": "6513ca4a19646bb504e33a3cd52a7b1e"
  },
  {
    "url": "assets/js/5.990bbb57.js",
    "revision": "9a412b12a7733ac4e080b4f5cb090b43"
  },
  {
    "url": "assets/js/50.8494501e.js",
    "revision": "de283bb8775bc1e425c51813025bd2ee"
  },
  {
    "url": "assets/js/51.4e5a7213.js",
    "revision": "8e90daa6a1680780cb7dcd83d21111a6"
  },
  {
    "url": "assets/js/52.02579dd3.js",
    "revision": "7dce42bcc4e7eac616330282c2423474"
  },
  {
    "url": "assets/js/6.999e2de5.js",
    "revision": "ae0d862861d9b90eafd9ace72c969b7d"
  },
  {
    "url": "assets/js/7.0ed85780.js",
    "revision": "02e290d3260cc0d18a0a80d407319a68"
  },
  {
    "url": "assets/js/8.63952efe.js",
    "revision": "a0ea7d86215a372c23c14314773105f9"
  },
  {
    "url": "assets/js/9.cdfb28c3.js",
    "revision": "56da009fabcfd21503e7020a90278ce7"
  },
  {
    "url": "assets/js/app.dc8a6e97.js",
    "revision": "752f8413a56752c7e35638d07f971f34"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "31281ef4e4b2b425eb23eae550539f5b"
  },
  {
    "url": "guides/development/configure.html",
    "revision": "769a95fa7355dd6ebc63f8fdca1817b7"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "c2d0c2c982c79e23b4df41e913e8bf7b"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "43c0a91afec1bfdddf2418219f267bc1"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "5415a1194bc9e3e534341a6010023767"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "ac5293ab38675f45ede9ac5fa16a8d5e"
  },
  {
    "url": "guides/index.html",
    "revision": "0cbf8b0bf13cf07e73d4513b39359db6"
  },
  {
    "url": "index.html",
    "revision": "c75c1eae74e3d95925919eb271603a04"
  },
  {
    "url": "tips.html",
    "revision": "2e4d0f3828507fb742b9123e0ce6c698"
  },
  {
    "url": "tools/browsers.html",
    "revision": "81f9e36253dd130bf5e8f4cc28e2baed"
  },
  {
    "url": "tools/cli.html",
    "revision": "d5078b8d3c03de639e9626f83a19cbef"
  },
  {
    "url": "tools/db.html",
    "revision": "a2cd87cc297b28900351fa227ee71716"
  },
  {
    "url": "tools/documentation.html",
    "revision": "9fc4951ca6315dc7ed5baff70881d421"
  },
  {
    "url": "tools/index.html",
    "revision": "1b732017b29dd85f12a18455b0f25135"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "13401b6e074254c9a91f5cedc82f2e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
