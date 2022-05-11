import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

export const ActionDelete = () => {
    return (
        <Stack>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
};
