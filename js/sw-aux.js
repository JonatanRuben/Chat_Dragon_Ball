//Almacenamiento al cache dinamico
function actualizarCacheDinamico(dynamicCache, req, res){
    
    if(res.ok){
        return caches.open(dynamicCache).then(cache=>{
            cache.put(req, res.clone());
            return res.clone();
        });
    }
    else{
        return res;
        // return fetch(e.request).then(newRes=>{
        //     actualizarCacheDinamico(DYNAMIC_CACHE,e.request,newRes);
        // });
    }

}