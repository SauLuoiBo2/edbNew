import { Stack } from '@mui/material';
import { Image, Text } from 'components';
import { imageSource } from 'assets';
import React from 'react';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';

const dataContent = {
    about: 'Chào mừng đến với EBD',
};

export const HeaderLogin = () => {
    return (
        <Stack
            sx={{ height: '100%' }}
            alignItems={'center'}
            justifyContent={'center'}
            bgcolor={'primary.focus'}
            py={5}
            spacing={2}
        >
            <Image.ImageLogo src={imageSource.LOGO} w='60%' />
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={dataContent.about} />
        </Stack>
    );
};
