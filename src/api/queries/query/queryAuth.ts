import { queryClient } from '../config';
import authApi from 'api/axios/auth/authApi';
import { useQuery, UseQueryResult } from 'react-query';
import { authKey } from '../keys/auth.key';

import { loginI } from 'api/axios/auth/model';

export const queryAuth = () => {
    const getAccessToken = () => {
        const token = window.localStorage.getItem(authKey.ACCESS_TOKEN);
        return token;
    };

    const login: (props: loginI) => Promise<any> = async ({ username, password }) => {
        const res = await authApi.login({ username, password });
        console.log(res.data);
        window.localStorage.setItem(authKey.ACCESS_TOKEN, res.data.token);
        window.localStorage.setItem(authKey.REFRESH_TOKEN, res.data.refreshToken);
        queryClient.setQueryData(authKey.AUTH, { token: res.data.token, role: res.data.role });
        console.log(queryClient.getQueriesData(authKey.AUTH), 'auth');
        return res.data;
    };

    const logout = () => {
        window.localStorage.removeItem(authKey.ACCESS_TOKEN);
        window.localStorage.removeItem(authKey.REFRESH_TOKEN);
        queryClient.setQueryData(authKey.AUTH, null);
    };
    const getAuth: () => any = () => {
        return queryClient.getQueryData(authKey.AUTH);
    };

    const useAuth: () => UseQueryResult<Auth | any> = () =>
        useQuery(authKey.AUTH, () => login({ username: 'das', password: 'adsasd' }), {
            initialData: { token: getAccessToken(), role: null },
        });

    return { login, logout, getAccessToken, getAuth, useAuth };
};

type Auth = {
    token: string;
    role: string | undefined;
};
