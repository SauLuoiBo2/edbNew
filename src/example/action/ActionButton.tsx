import { Stack } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';

const styleIcon = {
    fontSize: 20,
};

interface ActionDeleteEditP {
    onEdit?: () => void;
    onDelete?: () => void;
}

export const ActionDeleteEdit: React.FC<ActionDeleteEditP> = (props) => {
    return (
        <Stack direction={'row'} spacing={1} justifyContent={'center'}>
            <IconButton color='secondary' onClick={props.onEdit}>
                <Edit sx={styleIcon} />
            </IconButton>
            <IconButton color='primary' onClick={props.onDelete}>
                <DeleteIcon sx={styleIcon} />
            </IconButton>
        </Stack>
    );
};
