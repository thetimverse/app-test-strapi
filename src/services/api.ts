import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: { 'Authorization' : `Bearer 5e32ce310155d06aa7f5893e262de0f23aeec53c4226dfe4bb6b541817663bd6b3c825dab8847c6991af248b951e4409f4b4a552a6fc9846fc30ae86e3a77fb4ebae8a0dd7fe319c9fec95dddbd7ee707d5fa403a0899f8fa6c7f9247361af9e1569c8f2d8d557139a4f916b6b02a6d48e9ca945815803043e120edc32868f3a` }
})

export default api