import { configKey } from 'api/queries';
import { AxiosResponse } from 'axios';
import * as Modal from 'model';
import { useMutation, useQuery, useQueryClient } from 'react-query';
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

    useSearch = () => {
        return useQuery(configKey.EXAM_TYPE, this.search);
    };

    add = (name, description) => {
        const url = `${this.api}add`;
        const body = { name: name, description: description };
        return axiosClient.post(url, body);
    };

    useAdd = () => {
        const queryClient = useQueryClient();
        return useMutation(
            async (data) => {
                return await examTypeApi.add(data.name, data.description);
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries(configKey.EXAM_TYPE);
                },
            }
        );
    };
}

const examTypeApi = new ExamTypeApi();

export { examTypeApi };

export const useExamTypeAdd = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (data) => {
            return await examTypeApi.add(data.name, data.description);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(configKey.EXAM_TYPE);
            },
        }
    );
};
