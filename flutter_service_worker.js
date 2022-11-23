'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6e2aca1c283136dad08d3aba210e4e72",
"index.html": "352b8a0f5ecd75c1f813b66befde9c63",
"/": "352b8a0f5ecd75c1f813b66befde9c63",
"main.dart.js": "3a87127b73243d846f1d1d5bc8631bc3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "610062795096937a2f567244f2e0d051",
"assets/AssetManifest.json": "d494e1f61d9b5cb9e5df553d20a049bc",
"assets/NOTICES": "f05ca176e8f2ad15248604b2a24ba027",
"assets/FontManifest.json": "1c76fefc1bbd50fdd302bd003f4b1a7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cee5741800cd4f55cbbddfdaa9ded133",
"assets/lib/assets/images/accessByHour.png": "7263e0a878317bec0e1280674a3b27e7",
"assets/lib/assets/images/add_child.png": "79acc14f0f6eb753ddae65fbacf18f75",
"assets/lib/assets/images/check.png": "900af72d0c28ceb6d8974e6fc7471e0a",
"assets/lib/assets/images/entrega.png": "ce19c36e82f00c8a1daef2529c20535d",
"assets/lib/assets/images/accesos.png": "31c6b87eaaa72220409589df91c61324",
"assets/lib/assets/images/fraccionamiento.png": "fe3f2bfa4cad3d9ab10f9112f4cd32b8",
"assets/lib/assets/images/grupo.png": "f19ef4bf224092e088314e8680cfc134",
"assets/lib/assets/images/mantenimiento.png": "1fd6e765789433b529f405c29aa25e12",
"assets/lib/assets/images/dashboard.png": "2af2cfa5ec01c7176c8b2d92d94beec4",
"assets/lib/assets/images/pendiente.png": "d38e640a35df4e36cea29c240b2533eb",
"assets/lib/assets/images/guardiasCheck.png": "31ef116c280a8146b8fe2fefb09e450c",
"assets/lib/assets/images/por_confirmar.png": "f98daee62d9898f9be2388b766228832",
"assets/lib/assets/images/taxi.png": "a7df31181319bbb5fc783ab09a0f79c5",
"assets/lib/assets/images/travel.png": "c6a288a3546fad5491970f112f26e877",
"assets/lib/assets/images/Insert%2520Access.png": "c6ca9e7bdc4b8ea60d3e9cf3df1c0414",
"assets/lib/assets/images/condominio.png": "60b8188c0b8ea4dc75b2ab6f69752673",
"assets/lib/assets/images/pase_salida.png": "66adb18ace6662a237d46aad8633d724",
"assets/lib/assets/images/up.png": "207b5bf0aa197afbabbd7e25e74f8426",
"assets/lib/assets/images/drawer_guardias.png": "613ce9f91e092c8effd11976e36548d1",
"assets/lib/assets/images/Microphone.png": "be5e58f72a52900a70cb12aadcd96881",
"assets/lib/assets/images/down.png": "9c0ffe004be3674cb9439cf15f854fd4",
"assets/lib/assets/images/dollar.png": "065bb8a4c18e0c817243ae8c7cccd048",
"assets/lib/assets/images/person.png": "23e2c8fea07f2543787ba84e59b0cfca",
"assets/lib/assets/images/calle.png": "e605415d0f7c53b7ff5cb662e53ddbc5",
"assets/lib/assets/images/manzana.png": "f13ee7ea32aff95910fb50484ecdcc3a",
"assets/lib/assets/images/account.png": "62eb3433efc73139c167001b0ae17aff",
"assets/lib/assets/images/triangle_half.png": "6f9a46a0796e15367fe90c592f714f95",
"assets/lib/assets/images/confirmado.png": "c4d3f275f983f5e6e38d0974b2c47933",
"assets/lib/assets/images/house.png": "481f9f27b892d66266932197b31055cd",
"assets/lib/assets/images/payment.png": "b238fb167ff8391fea8118d748e2d76a",
"assets/lib/assets/images/expense.png": "5feb99b9bdf9ab0c754cc265ca2d4f50",
"assets/lib/assets/images/hogares.png": "86706fa772cc4fd3a5ac600b8e1fd8cf",
"assets/lib/assets/images/exclamation.png": "77381c69d850c3e50aedc9475606a9db",
"assets/lib/assets/images/microphone_message.png": "9bbd01f6f24724b8b0a1bb95275d5c17",
"assets/lib/assets/images/icon%2520tick.png": "69dfe2c71ae0bb4fac7eea46cd2ac273",
"assets/lib/assets/images/aceptar.png": "bbbfb7e58fcc84f4fd76cfdde594d6dd",
"assets/lib/assets/images/guardias.png": "20f0e3f0f18b555fdb4182bac7f92782",
"assets/lib/assets/images/triangle_green.png": "f79931aa28b94eea5fbe02664a84c191",
"assets/lib/assets/images/fecha_n.png": "75e36c83447f8f30e2fbae1e7ca5a953",
"assets/lib/assets/images/check_close.png": "516b349a1f3bcb98f3b8e9dc4934b7ec",
"assets/lib/assets/images/logo.png": "e51cc21f5b71d14d3e36316f6c97b80a",
"assets/lib/assets/images/upload.png": "4a3493ff484e4f1feaf1e9f1689cff59",
"assets/lib/assets/images/payments.png": "ff38ce9313315cb7344036f64042b4dc",
"assets/lib/assets/images/triangle_middle.png": "a378d2c0369ec871a4e6ece49fe0c9b8",
"assets/lib/assets/images/marcador.png": "a9fb626f5ff26ef8a35a54d9799c0b6d",
"assets/lib/assets/images/delete.png": "71b07732b3a107c42954e0bd15904c0f",
"assets/lib/assets/images/drawer_guardias_r.png": "5e1fc0d0a2364395930a19809d41abfc",
"assets/lib/assets/images/zone.png": "da03dce3f3eef0d3a46e32e2b3c483ac",
"assets/lib/assets/images/frecuente.png": "cb497c46fc8ef9e6f0b9103601c76dbb",
"assets/lib/assets/images/basuraWhite.png": "7dd10204dfbc605eeaca36fc45d49e2f",
"assets/lib/assets/images/edit.png": "3450d3e744ab0f41c18c3d2614e09d1b",
"assets/lib/assets/images/homes.png": "e3c046e5932c30cd427389475d20b4e9",
"assets/lib/assets/images/triangle_dark.png": "f83859264255f4239a061b6f1693e58a",
"assets/lib/assets/images/guardia.png": "31eef9e8ced8c7c642f7b5858e7008b0",
"assets/lib/assets/images/send.png": "f20e565d04c3d8cdf7df715e7b60acf4",
"assets/lib/assets/images/messages.png": "9d6d699202379979af829a05d98992f3",
"assets/lib/assets/images/comercios.png": "173c6bb23a11bb91c962f72ce1cc5c77",
"assets/lib/assets/images/amenities.png": "afb7135966d5be07d3a20c78b561685b",
"assets/lib/assets/images/edificio.png": "c3442446f07343aa2e0737f7106ddf19",
"assets/lib/assets/fonts/JosefinSans-Bold.ttf": "9880fc0845d0f3950e490e4f3b05c08c",
"assets/lib/assets/fonts/Oswald-Bold.ttf": "8993e4d87124a3808ae68d2e52d27f87",
"assets/lib/assets/fonts/JosefinSans-Light.ttf": "f0cc419ee290311a49733e728d598f8e",
"assets/lib/assets/fonts/Oswald-Regular.ttf": "dab2e777c19906ddc8d3ad983ca79cf0",
"assets/lib/assets/fonts/JosefinSans-Regular.ttf": "aff001b45565556d667c11fe85cada0d",
"assets/lib/assets/fonts/Oswald-Light.ttf": "8dece29a87d3dd3a60cac0023952f1ac",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
