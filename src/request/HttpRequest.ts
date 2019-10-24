import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export  default  class HttpRequest {
    public service: AxiosInstance;

    constructor() {
        this.service = axios.create()
        this.beforeSearch();
        this.searched();
    }
    beforeSearch() {
        this.service.interceptors.request.use((config: AxiosRequestConfig) => {
            return config;
        })
    }
    searched() {
        this.service.interceptors.response.use((data: any) => {

            return data;
        })
    }

}
