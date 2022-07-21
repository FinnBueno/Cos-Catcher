import React from 'react';
import { FcBinoculars } from 'react-icons/fc';
import { Button, Typography } from '@mui/material';
import { TextField } from 'atoms';
import { useForm } from 'react-hook-form';
import Wave from 'react-wavify';
import { Flex } from 'reflexbox';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Translate, translate } from 'react-i18nify';

type SignUpForm = {
    username: string;
    email: string;
    password: string;
}

export const SignUpPage: React.FC<{}> = () => {
    const auth = getAuth();

    const schema = yup.object().shape({
        username: yup.string()
            .min(3, translate('auth.error.usernameMinimum', { count: 3 }))
            .required(translate('auth.error.usernameMinimum', { count: 3 })),
        email: yup.string()
            .email(translate('auth.error.emailValid'))
            .required(translate('auth.error.emailValid')),
        password: yup.string()
            .min(5, translate('auth.error.passwordMinimum', { count: 5 }))
            .required(translate('auth.error.passwordMinimum', { count: 5 }))
    });

    const { handleSubmit, control } = useForm<SignUpForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signUp = ({ email, password }: SignUpForm) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                toast(
                    `Welcome ${user.displayName}!`,
                    {
                        type: 'success',
                    }
                );
            }).catch((_error) => {
                // TODO: Check for the right error code
                toast(
                    translate('auth.error.emailAlreadyInUse'),
                    {
                        type: 'error'
                    }
                );
            });
    };

    return (
        <Flex bg='#F5E1FF' width='100%' height='100%' flexDirection='column' justifyContent='flex-start'>
            <Flex
                height='40vh'
                width='100%'
                flexDirection='column'
                style={{
                    transform: 'rotateX(180deg)'
                }}
            >
                <Flex
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    style={{
                        position: 'relative',
                        height: '100%',
                        zIndex: 1000,
                        transform: 'rotateX(180deg)',
                        marginTop: '112px',
                    }}
                >
                    <FcBinoculars size={150} />
                    <Typography
                        variant='h4'
                        color='white'
                        style={{
                            fontFamily: '"Arial Black", "Roboto", "Helvetica", "Arial", sans-serif'
                        }}
                    >
                        CosCatcher
                    </Typography>
                </Flex>
                <Flex
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                >
                    <Wave fill='#AF40CF' />
                </Flex>
                <Flex style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 75,
                    left: 0,
                    right: 0,
                }}
                >
                    <Wave
                        fill='#7F25AF'
                        options={{
                            points: 4,
                            amplitude: 15,
                            speed: 0.2
                        }}
                    />
                </Flex>
            </Flex>
            <form>
                <Flex flexDirection='column' m={3}>
                    <Typography variant='h2'>
                        <Translate value='auth.welcome' />
                    </Typography>
                    <Typography variant='body1'>
                        <Translate value='auth.welcomeSubtitle' />
                    </Typography>
                    <Flex mt={4} mb={2}>
                        <TextField
                            control={control}
                            name='username'
                            defaultValue=''
                            label='Username'
                            type='text'
                        />
                    </Flex>
                    <Flex mb={2}>
                        <TextField
                            control={control}
                            name='email'
                            defaultValue=''
                            label='E-mail'
                            type='email'
                        />
                    </Flex>
                    <Flex mb={2}>
                        <TextField
                            control={control}
                            name='password'
                            defaultValue=''
                            label={translate('auth.password')}
                            type='password'
                        />
                    </Flex>
                    <Button variant='contained' onClick={handleSubmit(signUp)}>
                        <Translate value='auth.createAccount' />
                    </Button>
                    <Flex mt={2} justifyContent='center'>
                        <Button
                            disableRipple={false}
                            onClick={() => navigate('/sign-in')}
                        >
                            <Translate value='auth.signInInstead' />
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
};
