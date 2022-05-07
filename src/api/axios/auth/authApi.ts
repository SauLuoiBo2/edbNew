import { AxiosResponse } from 'axios';
import axiosClient from '../axiosClient';
import { loginI } from './model';

type ResLogin = {
    token: string;
    refreshToken: string;
    role: string;
};

class AuthApi {
    api: string;
    constructor() {
        this.api = 'user/';
    }
    login: ({ username, password }: loginI) => Promise<AxiosResponse<ResLogin>> = ({ username, password }: loginI) => {
        const url = `${this.api}login`;
        const body = {
            username: username,
            password: password,
        };
        return axiosClient.post(url, body);
    };
}

const authApi = new AuthApi();

export default authApi;
