import { examTimeApi, examTypeApi } from 'api/axios';
import { configKey } from 'api/queries/keys';
import { useQuery } from 'react-query';

export const queryExamTime = () => {
    const useData = () => {
        return useQuery(
            configKey.EXAM_TIME,
            async () => {
                const res = await examTypeApi.search();
                return res;
            },
            { refetchOnMount: true, staleTime: Infinity }
        );
    };

    return { useData };
};
