import routes from './route'
import { useRoutes } from "react-router-dom";


function App() {
const element = useRoutes(routes)
  return (
    <div className="container">
   {element}
    </div>
  );
}

export default App;
