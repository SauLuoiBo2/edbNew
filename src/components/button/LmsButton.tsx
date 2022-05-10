import React from 'react';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Text } from 'components';
import { CustomTextEnum } from 'assets';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

export const LmsButton = () => {
    return <div>LmsButton</div>;
};

interface AddNewProps extends LoadingButtonProps {}

LmsButton.AddNew = function AddNew(props: AddNewProps) {
    const { ...rest } = props;
    return (
        <LoadingButton
            size='small'
            color='secondary'
            // onClick={handleClick}
            // loading={loading}
            {...rest}
            loadingPosition='start'
            startIcon={<AddIcon />}
            variant='contained'
            sx={{
                width: 'fit-content',
                ':hover': {
                    transform: 'translateY(-3px)',
                },
            }}
        >
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={'Thêm mới'} />
        </LoadingButton>
    );
};

LmsButton.Save = function Save(props: AddNewProps) {
    const { ...rest } = props;
    return (
        <LoadingButton
            size='small'
            color='secondary'
            // onClick={handleClick}
            // loading={loading}
            {...rest}
            loadingPosition='start'
            startIcon={<SaveIcon />}
            variant='contained'
            sx={{
                width: 'fit-content',
                ':hover': {
                    transform: 'translateY(-3px)',
                },
            }}
        >
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={'Thêm mới'} />
        </LoadingButton>
    );
};

LmsButton.Cancel = function Cancel(props: AddNewProps) {
    const { ...rest } = props;
    return (
        <LoadingButton
            size='small'
            color='primary'
            // onClick={handleClick}
            // loading={loading}
            {...rest}
            loadingPosition='start'
            startIcon={<CancelIcon sx={{ fontSize: 30 }} />}
            variant='contained'
            sx={{
                width: 'fit-content',
                ':hover': {
                    transform: 'translateY(-3px)',
                },
            }}
        >
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={'Cancel'} />
        </LoadingButton>
    );
};
