import { useState } from "react";
import "./App.css";



function Generate_random_num() {
let [num, setNum] = useState(0);
const randomGeneratorHandler =()=>{
    num = (Math.random() * 100);
    setNum(num)
}    
  return <div className="App">
    <h2>Q3</h2>
    <p>{num.toFixed(2)}</p>
   
  <button onClick={randomGeneratorHandler}>Generate random number</button>

  </div>;
}

export default Generate_random_num;

