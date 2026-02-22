async function runSequential(tasks, delay){
    let r=[];
    for (let i = 0; i < tasks.length; i++) {
try {
   let result=await tasks[i]();
   r.push(result);
await new Promise(resolve=>setTimeout(resolve,delay));
} catch (error) {
console.log("Task fail");
return; 
}        
    }
return r;
}

const tasks=[
    ()=>Promise.resolve("Task 1 complete"),
    ()=>Promise.resolve("Task 2 complete"),
    ()=>Promise.reject("Task 3 failed"),
]
runSequential(tasks,1000).then(results=>{
    console.log(results);
});