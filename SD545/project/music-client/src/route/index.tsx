import { Navigate } from "react-router-dom";
import Login from "../pages/login";

import PageNotFound from "../pages/PageNotFound";
import Music from "../pages/Music";
import Login_Page from "../pages/login_page/Login";


export default [
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: "/music",
    element: <Music />,
  
  },

  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
