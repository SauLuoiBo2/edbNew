import { Header, Footer } from 'example';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { HeaderLms } from './components';
import { Box, Stack } from '@mui/material';
import { NavLms } from './components/NavLms';
import AppsIcon from '@mui/icons-material/Apps';
import ClearIcon from '@mui/icons-material/Clear';

export const LmsLayout: React.FC = () => {
    const [isOpenNav, setIsOpenNav] = React.useState<boolean>(true);

    function handleNav() {
        setIsOpenNav(!isOpenNav);
    }
    return (
        <>
            <Header.HeaderMain />
            <HeaderLms />
            <Style.Main className='container'>
                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 2, lg: 2 }}>
                    <Style.Nav>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            {isOpenNav ? (
                                <ClearIcon onClick={handleNav} sx={{ fontSize: 30, cursor: 'pointer' }} />
                            ) : (
                                <AppsIcon onClick={handleNav} sx={{ fontSize: 30, cursor: 'pointer' }} />
                            )}
                        </Stack>
                        <Style.OpenNav isOpen={isOpenNav}>
                            <NavLms />
                        </Style.OpenNav>
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

type PropsNav = {
    isOpen: boolean;
};

const Style = {
    Main: styled.main`
        width: 100%;
        display: block;
        margin-top: 20px;
    `,
    Nav: styled.nav``,
    OpenNav: styled.div<PropsNav>`
        width: ${(props) => (props.isOpen ? '100%' : 0)};
        height: ${(props) => (props.isOpen ? 'fit-content' : 0)};
        min-width: ${(props) => (props.isOpen ? '300px' : 0)};
        overflow-x: hidden;
    `,
};
