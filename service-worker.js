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
    "revision": "5e054a963bc2c7029f7bfc9e5959fff9"
  },
  {
    "url": "about/contact.html",
    "revision": "6552dea9a5f0581996c4929485c0910a"
  },
  {
    "url": "about/contributing.html",
    "revision": "caa25c6cf4b1347e40e320ec3ea255d4"
  },
  {
    "url": "about/index.html",
    "revision": "930f87775c34712f4a90e54c4e6ece65"
  },
  {
    "url": "about/license.html",
    "revision": "f9cc720774fde73263d533ae14a2233d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "3339bb9beab58d0818d8f240dc0dedeb"
  },
  {
    "url": "api/index.html",
    "revision": "6add7215379433c2b8e09e2b8f02e300"
  },
  {
    "url": "api/kbilling/components.html",
    "revision": "92f6a685d7076d905ec30c88d9337f01"
  },
  {
    "url": "api/kbilling/hooks.html",
    "revision": "9bc3485497bdc3f5f76c7ae12df965e8"
  },
  {
    "url": "api/kbilling/index.html",
    "revision": "024b239ceeec283ee35f32374d059808"
  },
  {
    "url": "api/kbilling/mixins.html",
    "revision": "50798e6bef4881b9d7e9c0351646c2b4"
  },
  {
    "url": "api/kbilling/services.html",
    "revision": "b69ec831c5a7eaf91bf65ecacc058c8d"
  },
  {
    "url": "api/kcore/application.html",
    "revision": "2a195d5abb39196ef5d291e002d3fd78"
  },
  {
    "url": "api/kcore/components.html",
    "revision": "e61084c85029cf4997d4fcafd195986d"
  },
  {
    "url": "api/kcore/hooks.html",
    "revision": "278fed873f86db26dec4ff5104abcee1"
  },
  {
    "url": "api/kcore/index.html",
    "revision": "f1928c9ce630e1f15742c47708f0d554"
  },
  {
    "url": "api/kcore/mixins.html",
    "revision": "4badee1373676c55093cadda4d75e00c"
  },
  {
    "url": "api/kcore/services.html",
    "revision": "e1ae4c6dac30a76af246d4ee5d9cebcb"
  },
  {
    "url": "api/kevent/components.html",
    "revision": "9cd4d9731b2d01596d108e2118fb517b"
  },
  {
    "url": "api/kevent/hooks.html",
    "revision": "c7a426428ece8bf10bde4ba8c595adc9"
  },
  {
    "url": "api/kevent/index.html",
    "revision": "6a4ad950ba2a2dee479ea50a639a51f6"
  },
  {
    "url": "api/kevent/mixins.html",
    "revision": "18dd2a882f88653cf4c925f75f883439"
  },
  {
    "url": "api/kevent/services.html",
    "revision": "b75fcad8a77ebe45b43cf7a3ebb46700"
  },
  {
    "url": "api/kmap/components.html",
    "revision": "f37dead3aa688b4c8ad1953a78f5acee"
  },
  {
    "url": "api/kmap/hooks.html",
    "revision": "c311dd98b32becbc71d7913f5554264b"
  },
  {
    "url": "api/kmap/index.html",
    "revision": "620a19c8c45e61fb681200c7095f50e0"
  },
  {
    "url": "api/kmap/mixins.html",
    "revision": "d4e2dca8997ae3ed819422aae6992bee"
  },
  {
    "url": "api/kmap/services.html",
    "revision": "2d23028bcb8930ea5a2446f0e5e05397"
  },
  {
    "url": "api/knotify/components.html",
    "revision": "5f2dba9f7200bc73cbcacf236d229022"
  },
  {
    "url": "api/knotify/hooks.html",
    "revision": "53e9178f3169a017dec580bee20bce02"
  },
  {
    "url": "api/knotify/index.html",
    "revision": "0a8f2ee48c4caf010e8983da1410c2f5"
  },
  {
    "url": "api/knotify/mixins.html",
    "revision": "0819827cc9cfa2bc001d8a15ff668a19"
  },
  {
    "url": "api/knotify/services.html",
    "revision": "b7d63c969754753f859bcc5b7a411eb6"
  },
  {
    "url": "api/kteam/components.html",
    "revision": "d469ee88d6dcaa37c7765fb5483cffd6"
  },
  {
    "url": "api/kteam/hooks.html",
    "revision": "2a5f206656629dba2fd9e97fa0032d52"
  },
  {
    "url": "api/kteam/index.html",
    "revision": "dc26adf1c3f79879bf9a86063b5674a1"
  },
  {
    "url": "api/kteam/mixins.html",
    "revision": "91987b37aa3fd37999522cdd4145089b"
  },
  {
    "url": "api/kteam/services.html",
    "revision": "809115700a677d6b4039ee6f8ce9c99c"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "aa274c80296813a0491412b4de50cf55"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "d669d3eb763e08f1b268e0e1dfc8a6c0"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "63668ebeda7e954c8a8fbd65174e2d50"
  },
  {
    "url": "architecture/index.html",
    "revision": "51f5e175c172be1cbaf52316f6aa448a"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "f303ab18fc1a361dc22be6bc01047830"
  },
  {
    "url": "assets/css/0.styles.9fa317d1.css",
    "revision": "dddc7c0257a7b9d7f4a81f34694ba431"
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
    "url": "assets/img/cd-pipeline.79fa1089.svg",
    "revision": "79fa1089efa2822bd40f57e6c9e6c20f"
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
    "url": "assets/js/10.0e9dbc41.js",
    "revision": "666bd55c2b7b6bed63ff6f3b4821712e"
  },
  {
    "url": "assets/js/11.38bbfcce.js",
    "revision": "1d9d03220c79137c0dfc3bb7bcc90f0a"
  },
  {
    "url": "assets/js/12.8b540f47.js",
    "revision": "8fc1c753c60da09802a83a438ec2fa14"
  },
  {
    "url": "assets/js/13.3148f7ac.js",
    "revision": "abb9606f438eb40137622e5ced511364"
  },
  {
    "url": "assets/js/14.a3e27be3.js",
    "revision": "02b7198165fc585eea6be0d3e1a8fd4f"
  },
  {
    "url": "assets/js/15.518dd8e5.js",
    "revision": "879b409ea7f8316235c942668f27a39e"
  },
  {
    "url": "assets/js/16.28e315cc.js",
    "revision": "191548684ebd04f79fdbe6906bb6dc7f"
  },
  {
    "url": "assets/js/17.71dab417.js",
    "revision": "5b0347e6be70b2387082b3d85877b69a"
  },
  {
    "url": "assets/js/18.33f1ee78.js",
    "revision": "07e652af817ffb33e49bae84904e1d91"
  },
  {
    "url": "assets/js/19.76767d6c.js",
    "revision": "6cd4adf395148deaa8a3434b3249ce5e"
  },
  {
    "url": "assets/js/2.e6b7f245.js",
    "revision": "b784bc26b5a779e411e850bbebaf5a26"
  },
  {
    "url": "assets/js/20.5948d941.js",
    "revision": "16f05f7656ea98ea686ce7b3fe4541cd"
  },
  {
    "url": "assets/js/21.1396f9ec.js",
    "revision": "2ea865e6da115c0ec989884c5879dc6d"
  },
  {
    "url": "assets/js/22.bd078a52.js",
    "revision": "6fb4bf471264b3f38e4d0cd8972331b3"
  },
  {
    "url": "assets/js/23.316207a8.js",
    "revision": "28dda16f41431c155f84b0b05f34d275"
  },
  {
    "url": "assets/js/24.4615da69.js",
    "revision": "b11266bc7e26fa21a7c502fa7e1871af"
  },
  {
    "url": "assets/js/25.863b31f3.js",
    "revision": "7a5bb0f2c3765be2d8d3b36485f7cdf2"
  },
  {
    "url": "assets/js/26.e63f3e4a.js",
    "revision": "38130029ca079f863fd9b043ccc36281"
  },
  {
    "url": "assets/js/27.60b6127b.js",
    "revision": "0188d1bbbebf20e2e7ffc6c3a135b910"
  },
  {
    "url": "assets/js/28.a89f97e7.js",
    "revision": "e894c2936fad67c2a160e028f37f49cb"
  },
  {
    "url": "assets/js/29.843276ff.js",
    "revision": "55d32cbb582ad02101718d4f57850a2e"
  },
  {
    "url": "assets/js/3.3355429d.js",
    "revision": "3a776af63e5f78b2fa731032c1820364"
  },
  {
    "url": "assets/js/30.51d9a20c.js",
    "revision": "96d2445db494b9ddacdf3dbc7f4b013b"
  },
  {
    "url": "assets/js/31.45c55b0f.js",
    "revision": "de5552701fbf82c1f9e76fbba8e4bc53"
  },
  {
    "url": "assets/js/32.124609b0.js",
    "revision": "8932ac1da31ee46f5e92d27de020f0a5"
  },
  {
    "url": "assets/js/33.da17fbca.js",
    "revision": "76782419cc29501f21988fd3c13fcf3f"
  },
  {
    "url": "assets/js/34.1cbbee40.js",
    "revision": "88a15b79b97702d155337879a6da46d5"
  },
  {
    "url": "assets/js/35.43101a30.js",
    "revision": "9b0183ce2bd30069c6d3d5aecc46f30f"
  },
  {
    "url": "assets/js/36.215bc388.js",
    "revision": "d6221417cdda74d87efd49d7f2e70088"
  },
  {
    "url": "assets/js/37.ca79bc7c.js",
    "revision": "7d5e0b329045f0ed264bd25d7bc83fc7"
  },
  {
    "url": "assets/js/38.d70c1093.js",
    "revision": "279575630afc61162334e0390af87cbd"
  },
  {
    "url": "assets/js/39.e7820f47.js",
    "revision": "8345cb2924e105a989911b372e6e9a43"
  },
  {
    "url": "assets/js/4.4bcc6c5e.js",
    "revision": "ce6cd542361fda4c1eb0272c9d52f192"
  },
  {
    "url": "assets/js/40.b82b1130.js",
    "revision": "1ec620f55fe9d7fe91cb75dae799bd9e"
  },
  {
    "url": "assets/js/41.7b37b3a6.js",
    "revision": "62b726cd3c74f87f3ae4a4662576e146"
  },
  {
    "url": "assets/js/42.a600f4f0.js",
    "revision": "5635f0b2c5cabb4787b3163140e271d7"
  },
  {
    "url": "assets/js/43.02234de3.js",
    "revision": "834161d58e3006f623322bf0e24a3e94"
  },
  {
    "url": "assets/js/44.5e0456de.js",
    "revision": "6afbc80dbf8d1a4a04e29422671c06e7"
  },
  {
    "url": "assets/js/45.5bcb9967.js",
    "revision": "cf78a55baa8553fabeac7d6ce3c4d0c3"
  },
  {
    "url": "assets/js/46.78c69694.js",
    "revision": "54e1f99cb982cc2ce6123b956cf052af"
  },
  {
    "url": "assets/js/47.0c71973a.js",
    "revision": "cfca678ef24e15e0a13eeb61cd622716"
  },
  {
    "url": "assets/js/48.4f7bfdb9.js",
    "revision": "16075e3ba218a0d30e2a698150a0424b"
  },
  {
    "url": "assets/js/49.5c7d3349.js",
    "revision": "d65659efcc9f0d980a80b32a034f6cc2"
  },
  {
    "url": "assets/js/5.9a6b1310.js",
    "revision": "ff14c81e7c99d1fd513d03e5b51b2479"
  },
  {
    "url": "assets/js/50.d36b07d1.js",
    "revision": "540d7bf7833573324721872a4720bbcd"
  },
  {
    "url": "assets/js/51.e080ef08.js",
    "revision": "7a75d38bb4700d8d6c80116e41bf7e0f"
  },
  {
    "url": "assets/js/52.2a1ef113.js",
    "revision": "56aec456f3e9fc31926bdfd17d47ad97"
  },
  {
    "url": "assets/js/53.aae6472b.js",
    "revision": "e4bf2b15785f3823195499b4ec11bf2c"
  },
  {
    "url": "assets/js/54.a0534692.js",
    "revision": "6c153349cc55745d455a161faf496eb5"
  },
  {
    "url": "assets/js/55.73d32943.js",
    "revision": "f18a8fb22587779be4e6c81225db754e"
  },
  {
    "url": "assets/js/56.f4759c8d.js",
    "revision": "5acb573b4f0301dab49607c6a4552a62"
  },
  {
    "url": "assets/js/57.6732d989.js",
    "revision": "06a9dc4883c911798c65a4062b048e2c"
  },
  {
    "url": "assets/js/58.12241b96.js",
    "revision": "2b266a9357c0082cdb2a055300a572c6"
  },
  {
    "url": "assets/js/59.8715c455.js",
    "revision": "01a1c22916f0b8d221ef2dab78e2be46"
  },
  {
    "url": "assets/js/6.25ec3b52.js",
    "revision": "3d32520bfbe3d343abbaede6bfbd111d"
  },
  {
    "url": "assets/js/60.1213e009.js",
    "revision": "880ecfd1a74112eb996c81e72b8b735d"
  },
  {
    "url": "assets/js/61.9c935a85.js",
    "revision": "c7620be444870e5a2d46bac7e41aa3b9"
  },
  {
    "url": "assets/js/7.4c67a6e3.js",
    "revision": "c405d58fbd40163a1d1f334e93016622"
  },
  {
    "url": "assets/js/8.93a56dd8.js",
    "revision": "7917042f61dad2382c623fba3294aad4"
  },
  {
    "url": "assets/js/9.c80db7c7.js",
    "revision": "66aa02b12de9ef992b27b529758e4180"
  },
  {
    "url": "assets/js/app.0e2707c7.js",
    "revision": "714e4b323d81fa03b2824ce697670f9f"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "7965e2fa7563ed98bc9411bdfdcb391d"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "27af9d331fe4bd9c44e396dfaaf42717"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "eac74ff090e32cad1e865697b4aea85d"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "e3766441cad83b7184b1816dd483a52a"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "788b1a394737f4e5dfff6320e583bcac"
  },
  {
    "url": "guides/index.html",
    "revision": "ecd1cba4b706cab40920420c75000747"
  },
  {
    "url": "index.html",
    "revision": "7189074f8ab21553e84b5e8cdf0a816a"
  },
  {
    "url": "tips.html",
    "revision": "9eafdc4d393c6cc06f1a433c895b1d27"
  },
  {
    "url": "tools/browsers.html",
    "revision": "b10f16010df751e6320e5b989a37557d"
  },
  {
    "url": "tools/cli.html",
    "revision": "9bc41b6c84c1107cee9229d240d6e945"
  },
  {
    "url": "tools/documentation.html",
    "revision": "d7ac3daf343738312e63c67df1ccaaa4"
  },
  {
    "url": "tools/index.html",
    "revision": "bf85016d1442d93748a8a15c169c02fa"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "71bc342e2ce7d6eaa70a80b9c847af30"
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