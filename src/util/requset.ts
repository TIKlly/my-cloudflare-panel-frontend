import axios from "axios";


const requset = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 5000
})

requset.interceptors.request.use(
    (config) => {
        return config
    }
)



export default requset