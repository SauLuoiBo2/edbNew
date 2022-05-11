import React from 'react';
import { MuiTableWrapper, MuiTableCell, MuiTableRow } from 'components/table';
import { Stack } from '@mui/material';
import { queryCalculationType } from 'api/queries/query/config';

export const CalculationType = () => {
    const { useCalculationType } = queryCalculationType();

    const { data, isLoading } = useCalculationType();
    console.log(data);
    return (
        <Stack spacing={2} pt={1}>
            <MuiTableWrapper dataColumn={dataColumn}>
                {data?.data &&
                    data.data?.map((data: any, i: any) => {
                        return (
                            <MuiTableRow key={i}>
                                <MuiTableCell align='center'>{i + 1}</MuiTableCell>
                                <MuiTableCell align='center'>{data.name}</MuiTableCell>
                            </MuiTableRow>
                        );
                    })}
            </MuiTableWrapper>
            {isLoading && <div>loadding</div>}
        </Stack>
    );
};

const dataColumn = [
    {
        name: 'STT',
        width: 50,
    },
    {
        name: 'Cách tính điểm',
        width: '',
    },
];
