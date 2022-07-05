import React, { useEffect, useState } from 'react';

type AuthenticatedUser = {
    uid: string;
    hasFinishedSetup: boolean;
} | undefined;

type AuthError = Error | boolean;

type Auth = {
    loading: boolean;
    error?: AuthError;
    user?: AuthenticatedUser;
}

export const AuthContext = React.createContext<Auth>({ loading: true });

export const AuthProvider: React.FC<{}> = (props) => {
    const [user, setUser] = useState<AuthenticatedUser>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AuthError>(false);

    useEffect(() => {

    }, []);

    return (
        <>
        </>
    );
};
