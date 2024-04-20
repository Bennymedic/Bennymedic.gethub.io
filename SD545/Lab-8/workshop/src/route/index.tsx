import { Navigate } from "react-router-dom";
import Login from "../pages/login";
import List from "../components/Music/music.songlist";
import Playlist from "../components/Music/music.playlist";
import PageNotFound from "../pages/PageNotFound";
import { Children } from "react";

export default [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/music",
    element: <List />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
    Children:[
      {
        path:"add",
        element:<Playlist/>
      },
      {
        path:"remove",
        element:<Playlist/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='auth/login' />
},
{
    path: '*',
    element: <PageNotFound />
}
];