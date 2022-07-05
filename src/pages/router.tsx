import React from 'react';
import { useLocation } from 'react-router-dom';

export const AppRouter: React.FC<{ test: (test: string) => void }> = () => {
    const _loc = useLocation();
    return (
        <>
        </>
    );
};
