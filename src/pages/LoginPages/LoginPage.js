import { Stack } from '@mui/material';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import { Button, Text } from 'components';

import React from 'react';
import * as Mui from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, Key } from '@mui/icons-material';
import { Contants } from 'assets';
import { useNavigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';

import { useFormik } from 'formik';
import { authKey, queryAuth } from 'api';

import { useQuery } from 'react-query';
import { MuiInput } from 'components/input';
import authApi from 'api/axios/auth/authApi';

const dataContent = {
    LOGIN: 'Đăng nhập hệ thống LMS',
};

export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // api
    const auth = queryAuth();

    // const result = useQuery(authKey.AUTH, )

    // state

    // func

    // form

    const validationSchema = yup.object({
        username: yup.string('Enter your email').required('Nhập tài khoản'),
        password: yup
            .string('Enter your password')
            .min(8, 'Mật khẩu không được ít hơn 8 ký tự')
            .required('Nhập mật khẩu'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            auth.login(values)
                .then(() => navigate(from, { replace: true }))
                .catch((error) => console.log(error.message));
        },
    });

    return (
        <Stack width={{ xs: '90%', md: '80%', lg: '60%' }} spacing={5}>
            <Text.CustomText variant={CustomTextEnum.bodyMain} text={dataContent.LOGIN} />

            <Stack component={'form'} spacing={2} onSubmit={formik.handleSubmit}>
                <MuiInput.IconInput
                    placeholder={'Nhập tai khoan'}
                    name='username'
                    type='text'
                    InputProps={{
                        startAdornment: (
                            <Mui.InputAdornment position='start'>
                                <AccountCircle />
                            </Mui.InputAdornment>
                        ),
                    }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <MuiInput.IconInput
                    placeholder={'Nhập mat khau'}
                    name='password'
                    type='text'
                    InputProps={{
                        startAdornment: (
                            <Mui.InputAdornment position='start'>
                                <Key />
                            </Mui.InputAdornment>
                        ),
                        endAdornment: (
                            <Mui.InputAdornment position='end' sx={{ cursor: 'pointer' }}>
                                <Visibility />
                            </Mui.InputAdornment>
                        ),
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button.BasicButton name={Contants.BasicContant.LOGIN.toUpperCase()} />
            </Stack>
        </Stack>
    );
};
