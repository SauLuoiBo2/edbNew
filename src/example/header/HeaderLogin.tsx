import { Stack } from '@mui/material';
import { Image, Text } from 'components';
import { imageSource } from 'assets';
import React from 'react';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';

const dataContent = {
    about: 'Hệ thống quản lý Hoc và thi trực tuyến EBD LMS',
};

export const HeaderLogin = () => {
    return (
        <Stack
            sx={{ height: '100%' }}
            alignItems={'flex-start'}
            justifyContent={'center'}
            bgcolor={'grey.600'}
            py={5}
            px={1}
            spacing={2}
            pl={2}
        >
            <Image.ImageLogo src={imageSource.LOGO} w='60%' />
            <Text.TitleText text={dataContent.about} />
        </Stack>
    );
};
