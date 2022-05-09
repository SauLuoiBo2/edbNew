import { HeaderNavItem } from './HeaderNavItem';
import React from 'react';
import { Stack } from '@mui/material';
import { CustomText } from 'components/text';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { Config, Contants } from 'assets';
import { queryAuth, queryClient } from 'api';
import { HOME_ROUTER } from 'router';

export const NavBar = () => {
    const navigate = useNavigate();
    const query = queryAuth();
    const isLogin = query.getAuth();

    return (
        <Stack direction={'row'} spacing={4} justifyContent={'flex-end'} alignItems={'center'}>
            {HOME_ROUTER.map((item, i) => {
                return <HeaderNavItem to={item.path} name={item.name} key={i} />;
            })}
            {isLogin ? (
                <div>da dang nhap</div>
            ) : (
                <Button.BasicButton
                    name={Contants.BasicContant.LOGIN}
                    onClick={() => navigate(Config.urlConfig.LOGIN)}
                />
            )}
        </Stack>
    );
};
