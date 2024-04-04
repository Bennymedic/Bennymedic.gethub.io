
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter';
import Generate_random_num from './generate_random_num';
import TemperatureConverter from './tempConverter';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Counter />
  <TemperatureConverter/>
  <Generate_random_num/>

  </>
    
);
