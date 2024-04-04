import { useState, ChangeEvent } from "react";
import "./App.css";



function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
  
    const handleCelsiusChange = (e:ChangeEvent<HTMLInputElement>) => {
      setCelsius(e.target.value);
    };
  
    const convertToFahrenheit = () => {
      const celsius_value = +celsius;
        const fahrenheit_value = (celsius_value * 9/5) + 32;
        setFahrenheit(fahrenheit_value.toFixed(2));
    };
  
    return (
      <div className="App">
        <h2>Q2</h2>
        
        <div>
          <label>Celsius:</label>
          <input 
            type="number" 
            value={celsius} 
            onChange={handleCelsiusChange} 
            placeholder="Enter temperature in Celsius" 
          />
          <button onClick={convertToFahrenheit}>Convert</button>
        </div>
        {fahrenheit && (
          <div>
            <label>Fahrenheit:</label>
            <input 
              type="text" 
              value={fahrenheit} 
            />
          </div>
        )}
      </div>
    );
  }
  
  export default TemperatureConverter;

