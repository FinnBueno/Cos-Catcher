import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

type AuthenticatedUser = {
    uid: string;
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
        onAuthStateChanged(
            getAuth(),
            (fbUser) => { // onSuccess
                if (!fbUser) return;
                setUser({
                    uid: fbUser.uid,
                });
            },
            (fbError) => setError(fbError), // onError
            () => setLoading(false) // onComplete
        );
    }, []);

    return (
        <>
        </>
    );
};
