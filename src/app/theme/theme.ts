'use client';
import { createTheme } from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

export const muiRtlCache = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
    cssVariables: true,
    direction: 'rtl',
    typography: {
        fontFamily: 'var(--BYekan)',
    },
});

export default theme;


declare module "@mui/material/styles" {
    interface PaletteOptions {
        black?: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
    }
}

