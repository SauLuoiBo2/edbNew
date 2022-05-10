import { Config } from 'assets';
import axios from 'axios';
import querySting from 'query-string';

function getLocalToken() {
    const token = window.localStorage.getItem('accessToken');
    // console.log("token >>>", token);
    return token;
}

const axiosClient = axios.create({
    baseURL: `${Config.apiConfig.HOST_API}`,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => querySting.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...

    if (getLocalToken()) {
        config.headers.common['Authorization'] = `Bearer ${getLocalToken()}`;
    }

    config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers["Access-Control-Allow-Methods"] =
    //   "GET, PUT, POST, DELETE, OPTIONS";
    return config;
});

// axiosClient.interceptors.response.use(
//     (response) => {
//         if (response && response.data) {
//             return response.data;
//         }
//         return response;
//     },
//     (error) => {
//         // Handle errors
//         throw error;
//     }
// );

export default axiosClient;
