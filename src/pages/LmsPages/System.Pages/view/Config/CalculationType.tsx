import React from 'react';
import { MuiTableWrapper } from 'components/table';
import { Stack } from '@mui/material';

export const CalculationType = () => {
    return (
        <Stack spacing={2} pt={1}>
            <MuiTableWrapper dataColumn={dataColumn}></MuiTableWrapper>
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
