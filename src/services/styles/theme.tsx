import { createTheme, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomPalette {
        neutral: PaletteColorOptions;
        // apple: PaletteColorOptions;
        // steelBlue: PaletteColorOptions;
        // violet: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
        // apple: true;
        // steelBlue: true;
        // violet: true;
    }
}

export const theme = createTheme({
    palette: {
        neutral: {
            main: '#FFF',
            contrastText: '#000',
        },
        primary: {
            main: '#7F25AF',
        }
    },
});
