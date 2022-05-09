import { Header, Footer } from 'example';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { HeaderLms } from './components';

export const LmsLayout: React.FC = () => {
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
