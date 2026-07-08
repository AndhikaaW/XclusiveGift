'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba5166d10694985bff790a9d6666d181",
".git/config": "71c798a5217d875d97ce92eebaf9cb2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "416d283bb395bbab5a7b9ef53567df25",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d41552532610dcf2a928eb98988933d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ddf9815a233c37cab36f33988d4bae16",
".git/logs/refs/heads/gh-pages": "ddf9815a233c37cab36f33988d4bae16",
".git/logs/refs/remotes/origin/gh-pages": "d77d1839922026660a960e1a0d61d550",
".git/objects/0b/d47748036d2f8631944816667cef49403b6c86": "3614fbcb1fadba805657c221ba2d7179",
".git/objects/0e/e8a65af2781f412e4abadf074ce7b22d3f48df": "0be7b87564d8e954a9d7b87af2e66510",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/7d7802447d2f8d254baf388b1353a493d47114": "7cf6072663d20743b1d17ae9682165c6",
".git/objects/14/8e8cc172e2dc8bcf6949d86c9f088a083a8e99": "e7a8b1474e28f10d461fd6d2d43223bd",
".git/objects/17/89227f9d817c29dbd3cb612bb32415b234b334": "fdb73b93b4ee6bff3176a098605fd553",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/f4c40275d0faf161dd7dc5b1d5df1e6d5c9b05": "10471a45529e0859802878b499a2043b",
".git/objects/2d/e3975cf8c62fdd182d1b267c04dc390f1c4311": "ace6f17e670d003c8fe33d5019e12b0b",
".git/objects/32/fcd35fa802e0333b7ad8845ea7345d867ff8c2": "9cfd277e1ac517e938b6902d8c31a276",
".git/objects/36/9f9803df4a9b2b7ccfd323bcfac6f5daefd02c": "3e18120a1c36da76edb6535bf4d6c894",
".git/objects/42/ec3f7ca22e2423b376e73df15fc73d9825e958": "8189343482140076fcd78063f7636131",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/d4160c98a7c6d876a5683aa52855e3e75f3d9e": "47340adbe62862bfdb2ba15f94b8280b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/56/ac925cdf0f4fdcdf1a1f40b65772cc0ddb5af8": "5ad7ee15ac81229ebe8f36670b240dbb",
".git/objects/57/96249e2fab2ff7e4bf85184656806c9ce26416": "a860cd1d2459cd442b9cfe96434a8f48",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/6154b08766a64c4edb27639e5376fe1d12d184": "5fe06e0c675a6ac804dd372c92cc88e4",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/f760b9a2c5d0cb80fb3450e65b532d83a116d9": "96f2b273fa41cf47c416d2b58592b7ce",
".git/objects/6b/f82b78a260159cb6668175fe76be6aea2ddd4b": "88415047e0a025d8a7b073cf985e1e17",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/8a03b69577c07b9b4231dea7bf12937a7e773a": "a363f77f2f062eb6d465477c956853b3",
".git/objects/84/d490a80b0b826790804445798b7d78fc835d21": "010dcb5a4ed84be6281d9e14bdc1b4ba",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/81115cd2adb9605a9e005ef74c6f10c4413131": "9114fd28f27fbc6e14a01355d46c0bda",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7d24f73116f29b229261f01964ea9c718abd88": "23f07d7a448e5f75e5411ef722fca02f",
".git/objects/8f/4cdbeb9319eecfa7c73ea7cb01808ef3cd9cfb": "a2aa69e666dd5fe8b4b820f397b2e7bc",
".git/objects/91/6075063238e8724c6644cbeb43a3c3a8d7381a": "67ca2c38768904418ac4babc27dd2b20",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/3dcc229ad2fc84aa0aa091dce9806e82510b29": "506fdf56de2018b9b12b622d6bff7122",
".git/objects/b4/c638cd67872f6117e5fe6fc64cc2483dce3126": "1ab453ba52e031fb04008a083b3c911c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c7/a8c215f5fa8ce58e38445f1ca375fb50a7c8e9": "f34d4a76bb8c7b332a8129d88e84bb3d",
".git/objects/c9/171f3e10e094ffd176d801e918417a55fb0d21": "af48bc8c45d37d72aded2da77870f781",
".git/objects/c9/af53f15946e85f89d953756cc47cab399ca32c": "7d6462b49b8543681fb8c58746f5113b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/0f5069af33ff3525d4284965b4af07060d96c1": "71fa390e5c47a31c0de7d9b369c0fa28",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6232b63db4bdb6fa05f2e6c5e5fee57c35aef2": "8b96776ce122b9d4c3a92d0ae291b599",
".git/objects/e3/120cfc4e1647fc14ac562f00b8ac35fa0010a1": "e15e128a9488c5c6dfebc9a4890f0010",
".git/objects/e9/f5aa8aa3a95b43acf2aa3a9848480bfe1f65b3": "8ad22f3137eefd2c0c8f2643efe96eaf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/8d41b3ce1c456c04a651b8a0b8d964120fa23c": "151ca5eb8a57065f2bf6e99c91467ad4",
".git/ORIG_HEAD": "d93b8e14893a36b213aa41142e2a6337",
".git/refs/heads/gh-pages": "47c4f79e9f347e279b8ad398223597a3",
".git/refs/remotes/origin/gh-pages": "47c4f79e9f347e279b8ad398223597a3",
"assets/AssetManifest.bin": "f51df1fafe54bf49996d858f8ac5fa5a",
"assets/AssetManifest.bin.json": "0611db2a293947aaf3bd61196b84ec71",
"assets/AssetManifest.json": "8b705bd0561bb1eea88bb6ed5d8a22ae",
"assets/assets/logo_xclusive_gift.jpg": "2c70a06215ca2b783d36fe5eed50a4e1",
"assets/assets/splashscreens.json": "313f45ea9b779ce3a6984e32c6c678b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9e985a8786321f8417e6acb6c0875ac0",
"assets/NOTICES": "3071509554d576160d5c4745ced5a79a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "fc693e09e98f81517458d43068c62fb0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "eabc14dc9de14b3166c8cafd3b4dff26",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f8634366a315516d5416ac5fbb62ffe",
"/": "6f8634366a315516d5416ac5fbb62ffe",
"main.dart.js": "874c026a98a2b0d68802296e8ffb29e2",
"manifest.json": "499e4cf8e74a6f995ea887c23202948a",
"version.json": "8e60eb183c53f14d36f9a3a80f273b3d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
