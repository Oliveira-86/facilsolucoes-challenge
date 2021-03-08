import axios, { Method } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET } from './OAuth';


type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

const URL_BASE = 'http://localhost:3000';

export const makeResquest = ({ method='GET', url, data, params, headers }:RequestParams) => {
    return axios({
        method,
        url: `${URL_BASE}${url}`,
        data,
        params,
        headers
    });
}

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content_Type': 'application/x-www-form-urlencoded'
    }

    const payload = qs.stringify({ ...loginData, grant_type: 'password' });

    return makeResquest({ url:'/oauth/token', data: payload, method: 'POST', headers });
}