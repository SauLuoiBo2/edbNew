import { Header, Footer } from 'example';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { authKey } from 'api';
import { HeaderLms } from './components';

export const HomeLayout: React.FC = () => {
    const queryClient = useQueryClient();

    return (
        <>
            <Header.HeaderMain />
            <HeaderLms />
            <Style.Main>
                <Outlet />
            </Style.Main>

            <Footer.MainFooter />
        </>
    );
};

const Style = {
    Main: styled.main`
        width: 100%;
        display: block;
    `,
    Nav: styled.nav`
        min-width: 300px;
    `,
};
