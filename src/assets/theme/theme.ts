import { colors, breakpoints } from './base';
import baseStyled, { ThemedStyledInterface } from 'styled-components';

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

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

function getBreakpoint(number: number) {
    return `only screen and (max-width: ${number})`;
}
