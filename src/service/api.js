import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-ecommerce-serratec.herokuapp.com/',
    timeout: 20000,
})

export default api;
