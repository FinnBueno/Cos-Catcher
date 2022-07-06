import { AppRouter } from 'pages/router';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from 'services/auth';

export const App: React.FC<{}> = () => (
    <HelmetProvider>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Ingredient Pouch</title>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
            {/* <link href='https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap' rel='stylesheet' /> */}
        </Helmet>
        <BrowserRouter>
            {/* <GlobalStyle /> */}
            {/* <ThemeProvider theme={theme}> */}
            <ToastContainer
                position='bottom-right'
                autoClose={1750}
                draggablePercent={50}
                hideProgressBar
            />
            <AuthProvider>
                <ToastContainer />
                {/* Providers go here */}
                <AppRouter />
            </AuthProvider>
            {/* </ThemeProvider> */}
        </BrowserRouter>
    </HelmetProvider>
);
