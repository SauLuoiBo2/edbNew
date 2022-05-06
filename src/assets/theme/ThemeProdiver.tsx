import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, themeMui } from './theme';
import { GlobalStyle } from './global/globalStyle';

import { ThemeProvider as MuiProvider } from '@mui/material/styles';

type Props = { children: React.ReactNode };

const StyledTheme: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MuiProvider theme={themeMui}>
                <GlobalStyle />
                {children}
            </MuiProvider>
        </ThemeProvider>
    );
};

export default StyledTheme;
