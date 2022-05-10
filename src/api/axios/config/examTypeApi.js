import { AxiosResponse } from 'axios';
import * as Modal from 'model';
import axiosClient from '../axiosClient';

class ExamTypeApi {
    constructor() {
        this.api = 'test-type/';
    }
    search = () => {
        const url = `${this.api}search`;
        const body = {
            keyword: '',
            page: 1,
            limit: 32,
        };
        return axiosClient.post(url, body);
    };
}

const examTypeApi = new ExamTypeApi();

export default examTypeApi;
