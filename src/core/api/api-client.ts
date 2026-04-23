import axios from "axios"

export const apiClient = axios.create({
    baseURL: "https://gateway-qrm4.onrender.com/api"
})