import { useQuery } from 'react-query';

import { configKey } from 'api/queries';
import { examTimeApi } from 'api/axios';

export const useExamTime = () => {
    const search = useQuery(
        configKey.EXAM_TYPE,
        async () => {
            const res = await examTimeApi.search();
            return res.data;
        },
        { refetchOnMount: true, staleTime: Infinity }
    );

    return { search };
};
