import axiosClient from '../axiosClient';

class CalculationApi {
    constructor() {
        this.api = 'score-calculation-type/';
    }
    search = () => {
        const url = `${this.api}all`;

        return axiosClient.post(url);
    };
}

export const calculationApi = new CalculationApi();
