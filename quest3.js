function mySetInterval(callback, delay){
    let a;
    let b=true;
    function callagain(){
        if(!b){
            return;
        }
        a=setTimeout(()=>{
            callback();
            callagain();
        },delay)
    }
    callagain();
return {
    id:a,
    stop(){
        b=false;
        clearTimeout(a);
}
}
}

let a=mySetInterval(()=>{
    console.log("hello");
},1000);
setTimeout(()=>{
    a.stop();
},5000)