import { getAuth, signOut } from 'firebase/auth';
import { MenuAppBar } from 'molecules/app-bar';
import { CurrentEventDisplay } from 'molecules/current-event';
import React from 'react';
import { Flex } from 'reflexbox';

export const MainPage: React.FC<{}> = () => (
    <Flex flexDirection='column' width='100%'>
        <MenuAppBar onPress={() => signOut(getAuth())} />
        <CurrentEventDisplay />
    </Flex>
);
