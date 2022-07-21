import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context';

type UnauthenticatedRouteProps = {
    path: string;
    element: React.ReactNode;
}

export const UnauthenticatedRoute: React.FC<UnauthenticatedRouteProps> = ({ path, element }) => {
    const auth = useAuth();

    return !auth.user ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to='/' />
    );
};
