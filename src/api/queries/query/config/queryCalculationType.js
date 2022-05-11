import { calculationApi } from 'api/axios';
import { configKey } from 'api/queries/keys';
import { useQuery } from 'react-query';

export const queryCalculationType = () => {
    const useCalculationType = () => {
        return useQuery(configKey.CALCULATION_TYPE, calculationApi.search, {
            refetchOnMount: true,
            staleTime: Infinity,
        });
    };

    return { useCalculationType };
};
