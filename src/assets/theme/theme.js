import { colors, breakpoints } from './base';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme';

export const defaultTheme = {
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    fonts: {
        title: 'Oswald, sans-serif',
        main: 'Poppins, sans-serif',
    },
    breakpoint: {
        xs: getBreakpoint(0),
        sm: getBreakpoint(576),
        md: getBreakpoint(768),
        lg: getBreakpoint(992),
        xl: getBreakpoint(1200),
        xxl: getBreakpoint(1400),
    },
};

export const themeMui = createTheme({
    ...defaultTheme,
});

function getBreakpoint(number) {
    return `only screen and (max-width: ${number}px)`;
}
