import { Stack } from '@mui/material';
import { imageSource } from 'assets';
import { useScrollPostion } from 'hooks';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Image, NavLink } from 'components';
import { NavBar } from './components';

export const HeaderMain = () => {
    const scroll = useScrollPostion();
    const navigate = useNavigate();
    return (
        <Style.Header className='container' isScroll={scroll > 200}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={1}>
                <Image.ImageLogo w={'130px'} src={imageSource.LOGO} onClick={() => navigate('/')} />
                <NavBar />
            </Stack>
        </Style.Header>
    );
};

type HeaderProps = {
    isScroll?: boolean;
};

const Style = {
    Header: styled.header<HeaderProps>`
        position: fixed;
        display: block;
        top: 0;
        width: 100%;
        background: ${(props) => (props.isScroll ? '#91959F' : 'none')};
        z-index: 10;
        box-shadow: 0px -3px 21px rgba(0, 0, 0, 0.25);
    `,
};
