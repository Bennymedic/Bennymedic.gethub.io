import { MouseEvent, useRef, useState } from "react";
import "./App.css";



// function Counter() {
// let [count, setCount] = useState(0);
// const incremetHandler =()=>{
//     setCount(++count)
// }
// const decrementHandler =()=>{
//     setCount(--count)
// }
    
//   return <div className="App">
//     <h2>Q1</h2>
//     {count}
//     <br></br>
//    <p><button onClick={incremetHandler}>Increment</button></p> 

//     <button onClick={decrementHandler}>Decrement</button>
//   </div>;
// }

// export default Counter;

function Addition(){
  const [inputval, setInputval] = useState(0);
  const firstNunRef = useRef<HTMLInputElement>(null)
  const secondNunRef = useRef<HTMLInputElement>(null)
  const hadleAddition = (e:MouseEvent<HTMLButtonElement>)=>{
    let add = (+firstNunRef.current!.value) + (+secondNunRef.current!.value)
    setInputval(add)

    //let addControlled = 
  }
  return (
    <div>
      <h1>{inputval}</h1>
      <input ref={firstNunRef}/>
      <input ref={secondNunRef}/>
      <button onClick={(e)=>hadleAddition(e)}>Addition</button>
    </div>
  )
}

export default Addition