import { Button } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Flex } from 'reflexbox';

export const MainPage: React.FC<{}> = () => (
    <Flex flexDirection='column'>
        Test
        <Button
            onClick={() => signOut(getAuth())}
            variant='contained'
        >
            Sign out
        </Button>
    </Flex>
);
