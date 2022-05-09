import { Stack, StackProps } from '@mui/material';
import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import { CustomText } from 'components/text';
import React from 'react';
import styled from 'styled-components';

interface Props extends StackProps {
    name: string;
    onClick: () => void;
}

export const BasicButton: React.FC<Props> = (props) => {
    const { name, onClick } = props;
    return (
        <Style.Wrapper onClick={onClick}>
            <Stack direction={'row'} justifyContent={'center'} px={2} py={1} color={'white.main'} {...props}>
                <CustomText variant={CustomTextEnum.bodyMain} text={name} />
            </Stack>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.button`
        background-color: var(--color-main);
        border-radius: 10px;
        cursor: pointer;
        :hover {
            transform: translateY(-3px);
        }
    `,
};
