import { ThemeProvider } from '@mui/material';
import { AppRouter } from 'pages/router';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { setLocale, setTranslations } from 'react-i18nify';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from 'services/auth';
import { en } from 'services/localization/en';
import { nl } from 'services/localization/nl';
import { theme } from 'services/styles';

setTranslations({
    en,
    nl,
});

setLocale('nl');

export const App: React.FC<{}> = () => (
    <HelmetProvider>
        <Helmet>
            <meta charSet='utf-8' />
            <title>CosCatcher</title>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
            <link rel='manifest' href='/site.webmanifest' />
            <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#7f25af' />
            <meta name='msapplication-TileColor' content='#7f25af' />
            <meta name='theme-color' content='#7f25af' />
        </Helmet>
        <BrowserRouter>
            {/* <GlobalStyle /> */}
            {/* <ThemeProvider theme={theme}> */}
            <ToastContainer
                position='top-right'
                autoClose={5000}
                theme='colored'
            />
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    {/* Providers go here */}
                    <AppRouter />
                </AuthProvider>
            </ThemeProvider>
            {/* </ThemeProvider> */}
        </BrowserRouter>
    </HelmetProvider>
);
