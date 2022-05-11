import { examTypeApi } from 'api/axios';
import { configKey } from 'api/queries/keys';
import { useMutation, useQuery } from 'react-query';

export const queryExamType = () => {
    const useExamType = () => {
        return useQuery(configKey.EXAM_TYPE, examTypeApi.search, { refetchOnMount: true, staleTime: Infinity });
    };

    return { useExamType };
};
