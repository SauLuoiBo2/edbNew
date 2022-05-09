import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import React from 'react';
import { authKey } from 'api';

const RequireAuth = ({ allowedRoles }: any) => {
    const location = useLocation();
    const auth: any = useQueryClient().getQueryData(authKey.AUTH);
    console.log(auth);
    console.log(auth);

    // return auth?.roles?.find((role: string) => allowedRoles?.includes(role)) ? (
    //     <Outlet />
    // ) : auth?.username ? (
    //     <Navigate to='/unauthorized' state={{ from: location }} replace />
    // ) : (
    //     <Navigate to='/login' state={{ from: location }} replace />
    // );
    return allowedRoles?.includes(auth.role) ? (
        <Outlet />
    ) : auth?.username ? (
        <Navigate to='/unauthorized' state={{ from: location }} replace />
    ) : (
        <Navigate to='/login' state={{ from: location }} replace />
    );
};

export default RequireAuth;
