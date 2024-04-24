import axios from "axios";


const access_token = localStorage.getItem('access_token')

export default axios.create({
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    }
});