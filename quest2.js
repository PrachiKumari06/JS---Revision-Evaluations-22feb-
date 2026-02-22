function createLimit(limit,interval){
    let count=0;
    setInterval(()=>{
        count=0;
    },interval)
   return  function(){
if(count<limit){
    count++;
    console.log("allow the call");
    
}
else{
     console.log("not allow the call");
   
}
    }
}
const a=createLimit(2,1000);
a();
a();
a();