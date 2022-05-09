import { TitleTextEnum } from 'assets/enum/TitleTextEnum';
import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    text?: string;
    variant?: TitleTextEnum;
    color?: string;
}

export const TitleText = (props: Props) => {
    const { children, text, style, color, variant = TitleTextEnum.HEADING_H3, ...rest } = props;

    switch (variant) {
        case TitleTextEnum.HEADING_H1:
            return (
                <H1 color={color} {...rest}>
                    {text ? text : children}
                </H1>
            );
        case TitleTextEnum.HEADING_H2:
            return (
                <H2 color={color} {...rest}>
                    {text ? text : children}
                </H2>
            );
        case TitleTextEnum.HEADING_H3:
            return (
                <H3 color={color} {...rest}>
                    {text ? text : children}
                </H3>
            );
    }
};

const H1 = styled.h1`
    color: ${(props) => props.color || null};
`;

const H2 = styled.h2`
    color: ${(props) => props.color || null};
`;

const H3 = styled.h3`
    color: ${(props) => props.color || null};
`;
