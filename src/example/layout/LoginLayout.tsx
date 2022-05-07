import { Grid, Stack } from '@mui/material';
import { HeaderLogin } from 'example/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LoginLayout = () => {
    return (
        <Grid container>
            <Item>
                <HeaderLogin />
            </Item>
            <Item>
                <Stack alignItems={'center'} justifyContent='center' py={5}>
                    <Outlet />
                </Stack>
            </Item>
        </Grid>
    );
};

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid item xs={12} lg={6} sx={{ height: { xs: 'auto', lg: '100vh' } }}>
            {children}
        </Grid>
    );
};
