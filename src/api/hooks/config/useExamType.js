import { useQuery } from 'react-query';

import { configKey } from 'api/queries';
import { examTypeApi } from 'api/axios';

export const useExamType = () => {
    const search = useQuery(
        configKey.EXAM_TYPE,
        async () => {
            const res = await examTypeApi.search();
            return res;
        },
        { refetchOnMount: true, staleTime: Infinity }
    );

    return { search };
};
