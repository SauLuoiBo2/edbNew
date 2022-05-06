import { Stack } from '@mui/material';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import { CustomText } from 'components/text';
import React from 'react';
import styled from 'styled-components';

type Props = { name: string; onClick: () => void };

export const BasicButton: React.FC<Props> = ({ name, onClick }) => {
    return (
        <Style.Wrapper onClick={onClick}>
            <Stack justifyContent={'center'} px={2} py={1} color={'white.main'}>
                <CustomText variant={CustomTextEnum.bodyMain} text={name} />
            </Stack>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        background-color: var(--color-main);
        border-radius: 10px;
        cursor: pointer;
        :hover {
            transform: translateY(-3px) scale(1.05);
        }
    `,
};
