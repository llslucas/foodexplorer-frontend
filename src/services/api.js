import axios from 'axios';

const API = import.meta.env.VITE_API || "http://localhost:3333";

export const api = axios.create({    
    baseURL: API,
    withCredentials: true
});