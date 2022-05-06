import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import GlobalStyled from './global/global';

type Props = { children: React.ReactNode };

const StyledTheme: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyled />
            {children}
        </ThemeProvider>
    );
};

export default StyledTheme;
