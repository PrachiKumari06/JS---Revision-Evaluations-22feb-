function createCountdown(seconds, onTick, onComplete){
    let time=seconds;
    let timer=0;
    function start(){
        timer=setInterval(()=>{
            if(time>0){
                onTick(time);
                time--;
            }
            else{
                clearInterval(timer);
                onComplete();
            }
        },1000)
    }
    start();
    return {
        pause(){
            clearInterval(timer);
        },
        resume(){
            start();
        }
    }
}

let a=createCountdown(5,(time)=>{
    console.log(time);
},()=>{
    console.log("Countdown complete");
});
