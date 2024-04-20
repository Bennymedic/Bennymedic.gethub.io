import { NavLink, useRoutes } from "react-router-dom";
import logo from "../images/logo.jpg";
import route from './routes'

export default function App() {
  const element = useRoutes(route)
  return (
    <div className="container">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt="Maharishi Logo" style={{ width: "100px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to="/products"
                  className="nav-link px-2 text-secondary"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" className="nav-link px-2 text-secondary">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div>{element}</div>
    </div>
  );
}
