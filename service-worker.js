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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "625017f28890a3662bf28266b0ac7517"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d6ccfc65.css",
    "revision": "8d4fc21c332db405e4adfcda36efb8c2"
  },
  {
    "url": "assets/img/get_all.1c9dcae0.png",
    "revision": "1c9dcae0a1482cb8f0369050702b32bc"
  },
  {
    "url": "assets/img/post_error.b6c21854.png",
    "revision": "b6c2185470a9ebadebedbf43db50a4d6"
  },
  {
    "url": "assets/img/post.e35c61c0.png",
    "revision": "e35c61c037228a06cd0cd69f9ea148e1"
  },
  {
    "url": "assets/img/put.7546066b.png",
    "revision": "7546066b7411c649d4d9c2ef766906ee"
  },
  {
    "url": "assets/img/relational_scheme.50c04084.png",
    "revision": "50c0408448f359da6c0793e327723a83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.00cd5fa3.png",
    "revision": "00cd5fa38dcdcfb2cd2591c8369acd68"
  },
  {
    "url": "assets/js/1.1b8468a3.js",
    "revision": "8d9ac46e28ed99b906a152aff65b5fb1"
  },
  {
    "url": "assets/js/10.1f297b1e.js",
    "revision": "1c2fdb8abfdad518206f392dd0add5c8"
  },
  {
    "url": "assets/js/13.049a8eeb.js",
    "revision": "3fd6e4912b9cab592d5d630cea9cd3a5"
  },
  {
    "url": "assets/js/14.43a7b754.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.ed37bd58.js",
    "revision": "390a608774f894a9e876c484358d1d0e"
  },
  {
    "url": "assets/js/16.959df476.js",
    "revision": "f73bea87312701ee64193b23062acf80"
  },
  {
    "url": "assets/js/17.0e562a19.js",
    "revision": "a3ade768ceca8e5ec70e7420649b379a"
  },
  {
    "url": "assets/js/18.59921fba.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.b3fcf576.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.dbf25b24.js",
    "revision": "fd1731f864c4ec7766ce2f121376d5f4"
  },
  {
    "url": "assets/js/20.70f82159.js",
    "revision": "4152e7e3767d8e1110555ca1c65a2e35"
  },
  {
    "url": "assets/js/21.580b3db8.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.3b8eb9fa.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.70b5442a.js",
    "revision": "fccc81ab70871e8529e4c2a56791bbe5"
  },
  {
    "url": "assets/js/25.f6d2044a.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.a2bea33f.js",
    "revision": "dd10a9d7faa030ff1279ccf8d690c5bb"
  },
  {
    "url": "assets/js/27.35d6e3a6.js",
    "revision": "ec59beb9f1062f53fc36361248a2e157"
  },
  {
    "url": "assets/js/28.4878a310.js",
    "revision": "7ddc6713416d777ba77c6a9ad25633ab"
  },
  {
    "url": "assets/js/29.cd61d8a6.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.fe685aea.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.3bb79550.js",
    "revision": "0b448d8113a4b074e0f4d442629769f9"
  },
  {
    "url": "assets/js/31.5516e23f.js",
    "revision": "4048b957d0df391aa1f58868f7358c64"
  },
  {
    "url": "assets/js/32.643c8163.js",
    "revision": "bfadffada5bae523487ab7b59b3d74a1"
  },
  {
    "url": "assets/js/33.577092f5.js",
    "revision": "46b3cf6f049fc878dcf1c4558af4d123"
  },
  {
    "url": "assets/js/34.ed74add3.js",
    "revision": "105c6e6cb48324225f2db06446148271"
  },
  {
    "url": "assets/js/35.358da949.js",
    "revision": "81e9adb8cf37e071616da5b15cd1f0ec"
  },
  {
    "url": "assets/js/36.f3f88892.js",
    "revision": "0c785eb3eb16a4821fbfa9654a478410"
  },
  {
    "url": "assets/js/37.a03a518e.js",
    "revision": "926e4ac3426b98dd42a8ddbdd79c2434"
  },
  {
    "url": "assets/js/38.222e2859.js",
    "revision": "513151ea18b65516cf725b2d3b0a86f5"
  },
  {
    "url": "assets/js/39.763a03a5.js",
    "revision": "0331adb41ad6c8da10035b7e21b0a974"
  },
  {
    "url": "assets/js/4.afba3b63.js",
    "revision": "da393dbb945a10dc9d5b94e9b186075e"
  },
  {
    "url": "assets/js/41.5167c572.js",
    "revision": "fc09462c43d81c031e87c84c4693dfbf"
  },
  {
    "url": "assets/js/5.e00eb67d.js",
    "revision": "ca01d5a1e8807e3f12d6054da85799cd"
  },
  {
    "url": "assets/js/6.f71d3977.js",
    "revision": "24b6e8be48777cd1a3acffcdffc5f76e"
  },
  {
    "url": "assets/js/7.9a6a55cf.js",
    "revision": "335a19e2e6dd44dbac46c4b2031c2b68"
  },
  {
    "url": "assets/js/8.bc7ffb1f.js",
    "revision": "0fe08a6c0fd376970ce3f5c411864c68"
  },
  {
    "url": "assets/js/9.0d5a0b6a.js",
    "revision": "7668ef4476f618f98a408ed226472642"
  },
  {
    "url": "assets/js/app.72849ca6.js",
    "revision": "7c3d977a24da0d65170f9452495ec003"
  },
  {
    "url": "assets/js/vendors~docsearch.a7214ad1.js",
    "revision": "4fdfc9c801456fc8bade32dc84c522d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4f20139123d95d952be87ccf3d74752e"
  },
  {
    "url": "design/index.html",
    "revision": "5639ea98249e1037bfd90e81d2a2d1bf"
  },
  {
    "url": "index.html",
    "revision": "7741f1ecae83f01c504339f1cf951fe1"
  },
  {
    "url": "intro/index.html",
    "revision": "dba392347ceb003a5a04425f4e280da9"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8da7f4b1f017024e66fdf3c1cd13b9c3"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c4a4fde59fa43c45e880f15ddbacbb7a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c01c9ca098c41fbbfd665f26835d88f0"
  },
  {
    "url": "software/index.html",
    "revision": "0e7414a681151daa9462e679fd712b93"
  },
  {
    "url": "test/index.html",
    "revision": "5ab58b083459200f55af583697fba42d"
  },
  {
    "url": "use-cases/index.html",
    "revision": "d979402b32d6ad654fded7f545ed88ff"
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
