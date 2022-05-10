import { Stack } from '@mui/material';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const FormViewOne: React.FC<Props> = ({ children }) => {
    return (
        <Stack spacing={2} pt={2} pb={1} borderBottom=' solid 2px' mb={3}>
            {children}
        </Stack>
    );
};
