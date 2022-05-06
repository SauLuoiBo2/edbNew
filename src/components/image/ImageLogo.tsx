import React from 'react';
import styled from 'styled-components';

interface Props extends WrapperP {
    src: string;
    alt?: string;
    onClick?: () => void;
}

interface WrapperP {
    w?: string | number;
}

export const ImageLogo = (props: Props, { ...rest }) => {
    const { src, alt, onClick, w } = props;
    return (
        <Style.Wrapper onClick={onClick} w={w} {...rest}>
            <Style.Img src={src} alt={alt || 'images'} />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div<WrapperP>`
        display: block;
        cursor: pointer;
        width: ${(props) => props.w || 'none'};
        :hover {
            transform: scale(1.05);
        }
    `,

    Img: styled.img`
        width: 100%;
        height: 100%;
    `,
};
