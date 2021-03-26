self.addEventListener('install', e =>{
    // console.log("Install",e);
    e.waitUntill(
        caches.open("static").then(cache => {
                return cache.addAll(
                    "./",
                    "style.css",
                    "icon/android-icon-192x192-dunplab-manifest-42526.jpg"
                    )
            }
        )
    )
})
//Fetch
self.addEventListener("fetch", e => {
    // console.log(`Intersect fetch request for: ${e.request.url}`);
    e.responseWidth(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})

//second method ovi
var app='v1.00';

var files=[
    "./",
    "index.html",
    "style.css",
    "icon/android-icon-192x192-dunplab-manifest-42526.jpg"
]

        self.addEventListener('install', e =>{
            // console.log("Install",e);
            e.waitUntill(
                caches.open("app").then(cache => {
                    return cache.addAll(files)
                    .catch(err=>{
                        console.error("Erroe adding files to",err);
                    })
                    })
            )
            console.info('SW Installed');
            self.skipWaiting();
        })

        self.addEventListener('activate',e=>{
        e.waitUntill(
            caches.keys()
            .then(cacheName=>{
                return Promise.all(
                    cacheName.map(cache=>{
                        if(cache !== app){
                            console.info("Erroe Old Cache",cache);
                            return caches.delete(cache);
                        }
                    })
                )
            })
        )
        return self.clients.claim();
      })
      ///Fetch
      self.addEventListener('fetch',e=>{
          console.info("SW fetch",e.request.url);
          e.respondWidth(
            caches.match(e.request)
            .then(response=>{
                return response || fetch(e.request);
            })
        )
      })