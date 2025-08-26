import { useEffect, useState } from "react"


function Count(){

const [count , setcount] = useState(0);

useEffect(() => {
console.log(`The count Value is : ${count}`);
},[count])

return(
  <>
  <p>Count : {count}</p>
  <button onClick={() => setcount(count + 1)}>Increace</button>
  </>
)

}

export default Count