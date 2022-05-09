import React from 'react';
import styled from 'styled-components';
import { Image, Text } from 'components';
import { Grid } from '@mui/material';
import { imageSource } from 'assets';

export const SectionHomeAbout = () => {
    return (
        <Style.Wrapper className='container'>
            <Grid container>
                <Item>
                    <Style.Img src={imageSource.HOME.HERO_2} />
                </Item>
                <Item>dsadsa</Item>
            </Grid>
        </Style.Wrapper>
    );
};

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Grid item xs={12} lg={6}>
            {children}
        </Grid>
    );
};

const Style = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        margin-top: 30px;
    `,
    Img: styled(Image.ImageBasic)`
        width: 80%;
        display: flex;
        position: relative;

        @media ${(props) => props.theme.breakpoint.md} {
            width: 90%;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 95%;
        }
        img {
            border-radius: 10px;
        }

        ::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 150px;
            border-radius: 10px;
            z-index: -1;
            bottom: -10px;
            right: -10px;
            background-color: var(--color-main);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
    `,
};
