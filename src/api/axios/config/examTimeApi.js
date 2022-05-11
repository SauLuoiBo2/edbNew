import axiosClient from '../axiosClient';

class ExamTimeApi {
    constructor() {
        this.api = 'test-time/';
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

const examTimeApi = new ExamTimeApi();

export { examTimeApi };
