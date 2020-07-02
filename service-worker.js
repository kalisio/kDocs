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
    "revision": "266cb6fe3a2e54e990dce83064822e3d"
  },
  {
    "url": "about/contact.html",
    "revision": "47287edd64609a4a935a1f8370acf508"
  },
  {
    "url": "about/contributing.html",
    "revision": "f56922448f320e88c531d9f9eda6da21"
  },
  {
    "url": "about/index.html",
    "revision": "e7aa4ebd59c2ce0bf5406306e077d25f"
  },
  {
    "url": "about/license.html",
    "revision": "1240b7f9db65481e43969ad808506cf3"
  },
  {
    "url": "about/roadmap.html",
    "revision": "10a62e79629f3f735b1f42499f4dd857"
  },
  {
    "url": "api/core/application.html",
    "revision": "75860fddab1d2bdce73c792e56525a6d"
  },
  {
    "url": "api/core/components.html",
    "revision": "89f3b4737155d726e58e5376fc0feb43"
  },
  {
    "url": "api/core/hooks.html",
    "revision": "4711c84855e3151830a7e4d2c8f4ed58"
  },
  {
    "url": "api/core/index.html",
    "revision": "f115edee4036c40c096dabcda90a670f"
  },
  {
    "url": "api/core/mixins.html",
    "revision": "07f1ab0b47827b03d944776d8089a387"
  },
  {
    "url": "api/core/services.html",
    "revision": "f87813ba875fa6d4592c8e1d112ede2a"
  },
  {
    "url": "api/index.html",
    "revision": "e823247844977afa1fc74f82a12109de"
  },
  {
    "url": "api/map/components.html",
    "revision": "133648fcc6d845d01c7b4fdc0dfcea9a"
  },
  {
    "url": "api/map/hooks.html",
    "revision": "f16979a0ed751e1466224f2ffcae30d6"
  },
  {
    "url": "api/map/index.html",
    "revision": "30622e3270f3cd85263b2654298341ac"
  },
  {
    "url": "api/map/mixins.html",
    "revision": "267022f640e362f0b07c6fa64d05c8d5"
  },
  {
    "url": "api/map/services.html",
    "revision": "8e16ae8cbaf80895ba761b4dd74fe8f4"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "e103ca41379dc3029ea556ecb72b51dd"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "c914b6dc3e6818ae34171856de3d0c66"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "531491ea96ffa5007b711d7b2b1133cd"
  },
  {
    "url": "architecture/index.html",
    "revision": "09b2a546998736d73a9438e24b50d132"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "f39b8a206dc3ff34b4c60c7344dd31a1"
  },
  {
    "url": "assets/css/0.styles.be5e49f6.css",
    "revision": "fae068808c1c3a8f81a1b90be35d1766"
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
    "url": "assets/img/application-hooks.e15ca2e0.svg",
    "revision": "e15ca2e0e0ce1b30ac2716348e14cc33"
  },
  {
    "url": "assets/img/authorisations-hooks.223455bf.png",
    "revision": "223455bfff7bf51dddf7721b4a40d5f6"
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
    "url": "assets/img/feature-hooks.c545f93a.png",
    "revision": "c545f93a07bb3da5d461aaf310813751"
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
    "url": "assets/img/storage-hooks.f7cd9bef.png",
    "revision": "f7cd9befe2f959dfbe39b009dcda2ea0"
  },
  {
    "url": "assets/img/tags-hooks.19298e57.png",
    "revision": "19298e5708cae740717b9063f3f8868c"
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
    "url": "assets/img/users-hooks.506d5935.png",
    "revision": "506d59353934862bbe3bb0fb5210ffdc"
  },
  {
    "url": "assets/js/10.93a92c36.js",
    "revision": "cbe1295172933a91f31266eea14f2533"
  },
  {
    "url": "assets/js/11.81aa82d0.js",
    "revision": "6d3a2d298f47a8937a15a1e596dd8a95"
  },
  {
    "url": "assets/js/12.a5c8561f.js",
    "revision": "19af770094585849d5a12c638596522e"
  },
  {
    "url": "assets/js/13.87b25d90.js",
    "revision": "4b76d3ade1e0c68a6eebf4a9134999ef"
  },
  {
    "url": "assets/js/14.948cf861.js",
    "revision": "189716fec593c115d742ceddce526bff"
  },
  {
    "url": "assets/js/15.547ddd67.js",
    "revision": "a9c731d7f6037e5d35f963962cb38761"
  },
  {
    "url": "assets/js/16.0f7a0353.js",
    "revision": "3935c50b0aa6e56c3031fee043a00da8"
  },
  {
    "url": "assets/js/17.679d2804.js",
    "revision": "3eca56f5abe5a91773d02add2b6cbeb7"
  },
  {
    "url": "assets/js/18.de929525.js",
    "revision": "79cb5d8dcfe59deaa2b8f40bd6588706"
  },
  {
    "url": "assets/js/19.cb9c5d44.js",
    "revision": "ee5f308cee57a8628584568dd16242a7"
  },
  {
    "url": "assets/js/2.b6b1e5f6.js",
    "revision": "dccf2d97691fa7565f0de9a34c61a00e"
  },
  {
    "url": "assets/js/20.7c3f5b7f.js",
    "revision": "22174c21794587816b6923dc6f1b1d3c"
  },
  {
    "url": "assets/js/21.33304ee3.js",
    "revision": "119ee5d6bc02101a3911977191d2fbe8"
  },
  {
    "url": "assets/js/22.d9698293.js",
    "revision": "53d11eb2b62f527e7f3ac3d54c2c7629"
  },
  {
    "url": "assets/js/23.0f92e8c8.js",
    "revision": "a1cd6eef61d3862dcd31814ab55d1499"
  },
  {
    "url": "assets/js/24.fbf5b821.js",
    "revision": "fb7e49e8d63f00edd3986e2eb4c5b3dd"
  },
  {
    "url": "assets/js/25.c3637cba.js",
    "revision": "f491c0cf9570ee1a10e0e0ee9abd5bcd"
  },
  {
    "url": "assets/js/26.0465a379.js",
    "revision": "c3374c35b09bacc505ef3ea47fc854dc"
  },
  {
    "url": "assets/js/27.fe824156.js",
    "revision": "9462cd278897497233a51fb889745c50"
  },
  {
    "url": "assets/js/28.4bb691e9.js",
    "revision": "868a5bc57c1478f1ded259a75d1c866b"
  },
  {
    "url": "assets/js/29.2e649c50.js",
    "revision": "a0c5b27a5238f535eb03266f0436db9d"
  },
  {
    "url": "assets/js/3.90d7e4b4.js",
    "revision": "2794e71c5fff42d16980b60380c428ae"
  },
  {
    "url": "assets/js/30.50c64b45.js",
    "revision": "52de02c2549855f6bfff35ed95faba70"
  },
  {
    "url": "assets/js/31.e849e831.js",
    "revision": "a64a5c8e6b42aa95853960182ecc0cf9"
  },
  {
    "url": "assets/js/32.d528932a.js",
    "revision": "1f70bb649935f8fbf6b717f57d03fbb8"
  },
  {
    "url": "assets/js/33.20fe54a8.js",
    "revision": "2c7da6f4a5822f43b229c94ddbe1db9f"
  },
  {
    "url": "assets/js/34.4a5d1f34.js",
    "revision": "739016aa8b82edea18e4aab71a20b6ca"
  },
  {
    "url": "assets/js/35.93ed9900.js",
    "revision": "495d2ed79bacb6bc768434136f1ff63e"
  },
  {
    "url": "assets/js/36.01e5ee19.js",
    "revision": "16c99244408d22ad1dd97c85f6d8a212"
  },
  {
    "url": "assets/js/37.bd314fb3.js",
    "revision": "fab4a6c61d65705327da298270088bb8"
  },
  {
    "url": "assets/js/38.bdf0bc5b.js",
    "revision": "2536fa09cda9b7dbb20b2bf723f709b1"
  },
  {
    "url": "assets/js/39.bd663673.js",
    "revision": "5a843cada2a8f636a1efdcbb92252d64"
  },
  {
    "url": "assets/js/4.9b2aa8f1.js",
    "revision": "7b5ef58b06180fa8953a3f2b0001eee8"
  },
  {
    "url": "assets/js/40.298f96ef.js",
    "revision": "a5bdd04dd28131a21e3b93efcdfc1860"
  },
  {
    "url": "assets/js/41.cbebc2cc.js",
    "revision": "5631ce11a15231ca7cfded1c0dfe65fe"
  },
  {
    "url": "assets/js/5.5d65e049.js",
    "revision": "154447add5dd6bb9745642aec26fa4e0"
  },
  {
    "url": "assets/js/6.55f7ec7b.js",
    "revision": "6906af280bd1997835f954043d7d6d0f"
  },
  {
    "url": "assets/js/7.e08ea544.js",
    "revision": "b5ef1210fbcd3167f3f195f1d07943f1"
  },
  {
    "url": "assets/js/8.04e78328.js",
    "revision": "e919587d4ad3d4867e89a6392ede102e"
  },
  {
    "url": "assets/js/9.580734d2.js",
    "revision": "cd0eec6a2951c0fa29ddaff0aed59e10"
  },
  {
    "url": "assets/js/app.194e660b.js",
    "revision": "e39fad3ae89b2ab997185256ea33699d"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "250db1992430aa981aef9d7cae221775"
  },
  {
    "url": "guides/development/configure.html",
    "revision": "57e428b2f2e9a1041fdfa234b52b75aa"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "acc7c60eb45bb578cfc018cc0881245c"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "1acb0f2dcae45078147c390b192316d2"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "5a99c19e7ba978f51e26f9c83124576e"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "4a3bcc443a58d03c2cf742b343fb8640"
  },
  {
    "url": "guides/index.html",
    "revision": "1a6b0582c4d60642b0b503318ce64515"
  },
  {
    "url": "index.html",
    "revision": "fd287646306b11c22f4e24bc4752ccdb"
  },
  {
    "url": "tips.html",
    "revision": "07d15c5fce92e82f87c73a00549fc09e"
  },
  {
    "url": "tools/browsers.html",
    "revision": "36f078569b2d54186573361045cb035b"
  },
  {
    "url": "tools/cli.html",
    "revision": "7b0541f4075d3de90a7ef74e1d9d195c"
  },
  {
    "url": "tools/documentation.html",
    "revision": "11601d6b2c61998388f4f10cc06b746e"
  },
  {
    "url": "tools/index.html",
    "revision": "cf4bb048cb32da5394200e987bab666c"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "7bfa6d32f3b956c7e5f87223e943e349"
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
