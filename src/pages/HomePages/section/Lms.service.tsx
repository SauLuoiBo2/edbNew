import React from 'react';
import styled from 'styled-components';
import { Image, Button } from 'components';
import { SelectLmsButton } from 'components/button';
import { imageSource } from 'assets';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        name: 'Giao vien',
        src: imageSource.ICONS.LMS_1,
        link: 'khao-thi',
    },
    {
        name: 'Hoc sinh',
        src: imageSource.ICONS.LMS_2,
        link: 'khao-thi',
    },
];

export const LmsService = () => {
    // hook
    const navigate = useNavigate();

    return (
        <Style.Wrapper className='container'>
            {data.map((item, i) => {
                return <SelectLmsButton onClick={() => navigate(item.link)} name={item.name} src={item.src} key={i} />;
            })}
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.section`
        display: flex;
        gap: 30px;
        margin-top: 20px;
    `,
};
