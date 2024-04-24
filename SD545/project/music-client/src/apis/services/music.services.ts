import { LoginDetail } from '../../types/login';
import http from '../axios';

const login = (data:LoginDetail)=>{
    return http.post('/auth/login', data)
}
const list = (query:string='')=>{
    const path = query ==='' ? "/music" : `/music?search=${query}`;
    return http.get(path)
}
const playlist = ()=>{
    return http.get('/playlist')
}
const removeFromPlaylist = (songId:string)=>{
    return http.post('/playlist/remove', {songId})
}
const addToPlaylist = (songId:string)=>{
    return http.post('/playlist/add', {songId})
}

export default {
    login,
    list,
    playlist,
    addToPlaylist,
    removeFromPlaylist
}

// import { LoginDetail } from "../../types/login";
// import axios from "../axios";
// import http from "../axios";

// const login = (data: LoginDetail) => {
//   return http.post("/auth/login", data);
// };
// const list = (query: string = "") => {
//   const path = query === "" ? "/music" : `/music?search=${query}`;
//   const access_token = localStorage.getItem("access_token");
//   const baseURL = "http://localhost:9000/api";

//   return axios.get(baseURL + path, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };


// const playlist = () => {
//   const path = "/playlist";

//   const access_token = localStorage.getItem("access_token");
//   const baseURL = "http://localhost:9000/api";

//   return axios.get(baseURL + path, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
// };



// const removeFromPlaylist = (songId: string) => {
//     const path = "/playlist/remove";
//     const access_token = localStorage.getItem("access_token");
//     const baseURL = "http://localhost:9000/api";
  
//     return axios.get(baseURL + path, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access_token}`,
//       },
//     });
// };

// { songId }
// const addToPlaylist = (songId: string) => {
//     const path = "/playlist/remove";
//     const access_token = localStorage.getItem("access_token");
//     const baseURL = "http://localhost:9000/api";
  
//     return axios.get(baseURL + path, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${access_token}`,
//       },
//     });
// };

// export default {
//   login,
//   list,
//   playlist,
//   addToPlaylist,
//   removeFromPlaylist,
// };
