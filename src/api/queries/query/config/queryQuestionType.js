import { questionTypeApi } from 'api/axios';
import { configKey } from 'api/queries/keys';
import { useQuery } from 'react-query';

export const queryQuestionType = () => {
    const useQuestionType = () => {
        return useQuery(configKey.QUESTION_TYPE, questionTypeApi.search, { refetchOnMount: true, staleTime: Infinity });
    };

    return { useQuestionType };
};
