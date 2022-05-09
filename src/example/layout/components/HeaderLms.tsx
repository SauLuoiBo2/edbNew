import { Stack } from '@mui/material';
import { imageSource } from 'assets';
import React from 'react';
import styled from 'styled-components';

export const HeaderLms = () => {
    return (
        <Style.Wrapper>
            <Stack sx={{ height: '100%' }} justifyContent={'center'} my={10} className='container'>
                <h1>Khảo thí</h1>
            </Stack>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.header`
        background-image: url(${imageSource.HOME.HERO_3});
        min-height: 230px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;

        h1 {
            color: white;
        }
    `,
};
