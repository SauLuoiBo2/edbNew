import { HeaderNavItem } from './HeaderNavItem';
import React from 'react';
import { Stack } from '@mui/material';
import { CustomText } from 'components/text';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { Config, Contants } from 'assets';
import { queryAuth, queryClient } from 'api';

export const NavBar = () => {
    const navigate = useNavigate();
    const query = queryAuth();
    const isLogin = query.useAuth().data?.token;

    return (
        <Stack direction={'row'} spacing={4} justifyContent={'flex-end'} alignItems={'center'}>
            {dataNav.map((item, i) => {
                return <HeaderNavItem to={item.link} name={item.name} key={i} />;
            })}
            {isLogin ? (
                <div>da dang nhap</div>
            ) : (
                <Button.BasicButton
                    name={Contants.BasicContant.LOGIN}
                    onClick={() => navigate(Config.urlConfig.LOGIN)}
                />
            )}
            {/* <Button.BasicButton
                name={Contants.BasicContant.LOGIN}
                onClick={() =>
                    query.login({
                        username: 'admin',
                        password: 'oxnbevk3kc1w4c8jtb2jogycpk30093a99jmlcwfh888ibjvi6xw3hmgho955e9p',
                    })
                }
            /> */}
            {/* <Button.BasicButton name={Contants.BasicContant.LOGIN} onClick={() => navigate(Config.urlConfig.LOGIN)} /> */}
        </Stack>
    );
};

const dataNav = [
    {
        name: 'Trang chủ',
        link: '/',
    },
    {
        name: 'Giới thiệu',
        link: '/',
    },
    {
        name: 'Tin tức',
        link: '/',
    },
    {
        name: 'Liên hệ',
        link: '/',
    },
    {
        name: 'LMS',
        link: '/',
    },
];
