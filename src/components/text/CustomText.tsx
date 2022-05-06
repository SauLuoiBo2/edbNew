import { CustomTextEnum } from 'assets/enum/CustomTextEnum';
import React from 'react';

type Props = { children?: React.ReactNode; text?: string; variant?: CustomTextEnum; style?: any };

export const CustomText = ({ children, text, variant = CustomTextEnum.main, style }: Props, { ...rest }) => {
    let sizes: any = {};

    switch (variant) {
        case CustomTextEnum.small:
            sizes = { fontSize: '13px', fontWeight: 400 };
            break;
        case CustomTextEnum.main:
            sizes = { fontSize: '16px', fontWeight: 400 };
            break;
        case CustomTextEnum.bodyMain:
            sizes = { fontSize: '16px', fontWeight: 600 };
            break;
    }

    return (
        <p style={{ ...sizes, ...style }} {...rest}>
            {text ? text : children}
        </p>
    );
};
