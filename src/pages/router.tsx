import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Flex } from 'reflexbox';
import { useAuth } from 'services/auth';
import { SignInPage } from './auth';
import { SignUpPage } from './auth/sign-up';
import { MainPage } from './main';

export const AppRouter: React.FC<{}> = () => {
    const { authenticatedWrap, unauthenticatedWrap } = useAuth();
    return (
        <Flex height='100%'>
            <Routes>
                <Route
                    path='/sign-in'
                    element={unauthenticatedWrap(SignInPage)}
                />
                <Route
                    path='/sign-up'
                    element={unauthenticatedWrap(SignUpPage)}
                />
                <Route
                    path='/'
                    element={authenticatedWrap(MainPage)}
                />
            </Routes>
        </Flex>
    );
};
