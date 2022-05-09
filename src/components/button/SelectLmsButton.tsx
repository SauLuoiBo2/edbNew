import React from 'react';
import { Stack, StackProps } from '@mui/material';
import { Image, Text } from 'components';
import { ImagePath } from 'utils';
import { CustomTextEnum } from 'assets';

interface Props extends StackProps {
    name?: string;
    src?: any;
}

export const SelectLmsButton: React.FC<Props> = (props) => {
    const { name, src, ...rest } = props;

    return (
        <Stack
            {...rest}
            sx={{ minWidth: '200px', cursor: 'pointer', ':hover': { transform: 'translateY(-3px)' } }}
            bgcolor={'white.main'}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            py={2}
            spacing={2}
            borderRadius={2}
        >
            <Image.ImageBasic style={{ width: '40px' }} src={src} />
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={name || 'nmae'} />
        </Stack>
    );
};
