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

self.addEventListener("fetch",e=>{
    console.log(`Intersect fetch request for :${e.request.url}`);

})