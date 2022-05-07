import { Config } from 'assets';
import axios from 'axios';
import querySting from 'query-string';

const axiosClient = axios.create({
    baseURL: `${Config.apiConfig.HOST_API}`,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => querySting.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...

    // config.headers["Access-Control-Allow-Methods"] =
    //   "GET, PUT, POST, DELETE, OPTIONS";
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;
