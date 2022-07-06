import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context';

type AuthenticatedRouteProps = {
    path: string;
    element: React.ReactNode;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ path, element }) => {
    const auth = useAuth();

    return auth.user ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to='/sign-in' />
    );
};
