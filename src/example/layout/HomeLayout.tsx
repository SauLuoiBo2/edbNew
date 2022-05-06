import { Header, Footer } from 'example';
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
    return (
        <>
            <Header.HeaderMain />
            <Style.Main>
                <Outlet />
            </Style.Main>
            <Footer.MainFooter />
        </>
    );
};

const Style = {
    Main: styled.main`
        display: block;
        width: 100%;
        overflow-x: hidden;
    `,
    Nav: styled.nav`
        min-width: 300px;
    `,
};
