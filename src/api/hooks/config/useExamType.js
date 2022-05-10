import { useQuery } from 'react-query';

import { configKey } from 'api/queries';
import examTypeApi from 'api/axios/config/examTypeApi';

export const useExamType = () => {
    const search = useQuery(
        configKey.EXAM_TYPE,
        () => {
            return examTypeApi.search();
        },

        { refetchOnMount: true, staleTime: 30000 }
    );

    return { search };
};
