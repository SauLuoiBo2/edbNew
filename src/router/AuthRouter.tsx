import { Layout } from 'example';
import { HomePages } from 'pages';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const AuthRouter = (
    <Route element={<Layout.HomeLayout />}>
        <Route path='login' element={<HomePages.HomePage />} />
    </Route>
);
