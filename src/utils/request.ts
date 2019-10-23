import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'


export  const  service=axios.create();
service.interceptors.request.use((config:AxiosRequestConfig)=>{
     console.log(config)
    return config;
})
    service.interceptors.response.use((response:AxiosResponse)=>{
        console.log(123)
     return response;
})

