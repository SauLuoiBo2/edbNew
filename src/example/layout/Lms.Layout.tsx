import { Header, Footer } from 'example';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { HeaderLms } from './components';
import { Box, Stack } from '@mui/material';
import { NavLms } from './components/NavLms';

export const LmsLayout: React.FC = () => {
    return (
        <>
            <Header.HeaderMain />
            <HeaderLms />
            <Style.Main className='container'>
                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: 2 }}>
                    <Style.Nav>
                        <NavLms />
                    </Style.Nav>
                    <Box width={'100%'}>
                        <Outlet />
                    </Box>
                </Stack>
            </Style.Main>
            <Footer.MainFooter />
        </>
    );
};

const Style = {
    Main: styled.main`
        width: 100%;
        display: block;
        margin-top: 20px;
    `,
    Nav: styled.nav`
        min-width: 300px;
    `,
};
