import React from 'react';
import {
 AppBar, IconButton, Toolbar, Typography
} from '@mui/material';
import { Translate } from 'react-i18nify';
import { FaUserCircle } from 'react-icons/fa';

export const MenuAppBar: React.FC<{
    onPress: () => void,
    icon?: React.ReactNode
}> = ({
    onPress,
    icon = (<FaUserCircle />)
}) => (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                <Translate value='title'>CosCatcher</Translate>
            </Typography>
            <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={onPress}
                color='inherit'
            >
                {icon}
            </IconButton>
        </Toolbar>
    </AppBar>
);
