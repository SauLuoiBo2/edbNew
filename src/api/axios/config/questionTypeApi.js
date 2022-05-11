import axiosClient from '../axiosClient';

class QuestionTypeApi {
    constructor() {
        this.api = 'question-type/';
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

export const questionTypeApi = new QuestionTypeApi();
