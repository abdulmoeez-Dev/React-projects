import { useEffect, useState } from "react"


function AutoCounter() {

    const [count, setcount] = useState(0);
    const [isRuning, setIsRuning] = useState(true);


    useEffect(() =>{
         console.log("Effect Run....");


let timer;
if(isRuning){
    timer = setInterval(() => {
        setcount((prev) => prev + 1)
    } , 1000)
}

return () => {
    console.log("Cleanup");
    clearInterval(timer)
    
}
         
    }, [isRuning])


return (
<>
<h2>Count : {count}</h2>
<button  onClick={() => setIsRuning(!isRuning)}>
    {isRuning ? "Pause" : "Start"}
</button>

</>



)




}

export default AutoCounter