if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('sw.js')
    .then(register=>{
        console.log("SW Registered",register);
        // console.log(register);
    }).catch(error=>{
        console.log("SW is not Registered",error)
        // console.log(error);
    });
}