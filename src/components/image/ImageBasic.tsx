import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt?: string;
    onClick?: () => void;
}

export const ImageBasic = (props: Props) => {
    const { src, alt, ...rest } = props;
    return (
        <Style.Wrapper {...rest}>
            <Style.Img src={src} alt={alt || 'images'} />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        display: block;
    `,

    Img: styled.img`
        width: 100%;
        height: 100%;
    `,
};
