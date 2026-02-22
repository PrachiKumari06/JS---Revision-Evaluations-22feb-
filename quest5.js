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