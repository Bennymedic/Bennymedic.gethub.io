
import { LoginDetail } from '../../types/login';
import http from '../axios';

const login = (data:LoginDetail)=>{
    return http.post('/auth/login', data)
}
const list = ()=>{
    return http.get('/music')
}
const playlist = ()=>{
    return http.get('/playlist')
}


export default {
    login,
    list,
    playlist
}
