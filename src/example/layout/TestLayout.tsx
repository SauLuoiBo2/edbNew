import { Header } from 'example';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const TestLayout = () => {
    return (
        <div>
            <Header.HeaderMain />
            <Outlet />
        </div>
    );
};
