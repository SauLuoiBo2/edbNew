import { Box, BoxProps } from '@mui/material';
import React from 'react';

interface Props extends BoxProps {
    children: React.ReactNode;
}

export const PaperView: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <Box
            {...rest}
            bgcolor={'white.main'}
            sx={{ boxShadow: '0 0 20px 0 rgb(76 87 125 / 2%)' }}
            py={1}
            px={2}
            borderRadius={2}
        >
            {children}
        </Box>
    );
};
