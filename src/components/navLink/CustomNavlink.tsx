import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props extends NavLinkP {
    to: string;
    name: string;
}

interface NavLinkP {
    isScroll?: boolean;
}

export const CustomNavlink = ({ to, name, isScroll }: Props, { ...rest }) => {
    return (
        <Style.NavLink to={to} {...rest} isScroll={isScroll}>
            {name}
        </Style.NavLink>
    );
};

const Style = {
    NavLink: styled(Link)<NavLinkP>`
        display: inline-block;
        position: relative;
        color: ${(props) => (props.isScroll ? 'red' : 'black')};
        cursor: pointer;
        height: 50px;

        ::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: ${(props) => (props.isScroll ? 'red' : 'black')};
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }

        :hover {
            ::after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
    `,
};
