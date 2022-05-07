import { Layout } from 'example';
import { LoginPages } from 'pages';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

export const LoginRouter = (
    <Route element={<Layout.LoginLayout />}>
        <Route path='login' element={<LoginPages.LoginPage />} />
    </Route>
);
