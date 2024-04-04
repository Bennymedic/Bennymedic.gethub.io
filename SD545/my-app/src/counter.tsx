import { useState } from "react";
import "./App.css";



function Counter() {
let [count, setCount] = useState(0);
const incremetHandler =()=>{
    setCount(++count)
}
const decrementHandler =()=>{
    setCount(--count)
}
    
  return <div className="App">
    <h2>Q1</h2>
    {count}
    <br></br>
   <p><button onClick={incremetHandler}>Increment</button></p> 

    <button onClick={decrementHandler}>Decrement</button>
  </div>;
}

export default Counter;

