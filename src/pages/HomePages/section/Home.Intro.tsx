import { Grid, Stack } from '@mui/material';
import { imageSource, TitleTextEnum } from 'assets';
import { Image, Text } from 'components';
import React from 'react';
import styled from 'styled-components';

const dataContent = {
    TITLE: 'Hệ thống quản lý Học và thi trực tuyến EBD LMS',
    DES: 'Nền tảng dạy và học trực tuyến với đầy đủ các tính năng quản lý học liệu và trường lớp, đáp ứng tất cả các nhu cầu của nhà trường, giáo viên và học sinh.',
};

export const SectionHomeIntro = () => {
    return (
        <Style.Wrapper className='container'>
            <Grid container alignItems={'flex-end'}>
                <Item>
                    <Stack alignItems={'center'} justifyContent={'center'} py={10} sx={{ height: '100%' }}>
                        <Text.TitleText
                            color={'var(--color-main)'}
                            variant={TitleTextEnum.HEADING_H2}
                            text={dataContent.TITLE}
                        />
                        <Text.CustomText text={dataContent.DES} />
                    </Stack>
                </Item>
                <Item>
                    <Stack alignItems={'center'} justifyContent={'flex-end'}>
                        <Style.Img src={imageSource.HOME.HERO_1} />
                    </Stack>
                </Item>
            </Grid>
        </Style.Wrapper>
    );
};

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid item xs={12} lg={6} sx={{ height: '100%' }}>
            {children}
        </Grid>
    );
};

const Style = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        align-items: flex-end;
        background-color: var(--color-bg-home);
        min-height: 80vh;
    `,
    Img: styled(Image.ImageBasic)`
        width: 350px;

        @media ${(props) => props.theme.breakpoint.md} {
            width: 300px;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 250px;
        }
    `,
};
