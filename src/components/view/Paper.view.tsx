import { Stack } from '@mui/material';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const PaperView: React.FC<Props> = ({ children }) => {
    return (
        <Stack p={2} borderRadius={2} justifyContent={'center'}>
            {children}
        </Stack>
    );
};
