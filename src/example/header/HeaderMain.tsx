import { Stack } from '@mui/material';
import { imageSource } from 'assets';
import React from 'react';
import styled from 'styled-components';

export const HeaderMain = () => {
    return (
        <Style.Header className='container'>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ minHeight: '100px' }}>
                <img src={imageSource.LOGO} />
                <div>dasads</div>
            </Stack>
        </Style.Header>
    );
};

const Style = {
    Header: styled.header``,
};
