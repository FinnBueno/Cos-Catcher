import { Button, Typography } from '@mui/material';
import { TextField } from 'atoms';
import React from 'react';
import { useForm } from 'react-hook-form';
import Wave from 'react-wavify';
import { Flex } from 'reflexbox';

type SignInForm = {
    email: string;
    password: string;
}

export const SignInPage: React.FC<{}> = () => {
    const { handleSubmit, control } = useForm<SignInForm>();
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
                <Flex style={{
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
                        fill='purple'
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
                        Welcome!
                    </Typography>
                    <Typography variant='body1'>
                        Sign in below to begin playing.
                    </Typography>
                    <Flex mt={4} mb={2}>
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
                            label='Password'
                            type='password'
                        />
                    </Flex>
                    <Button variant='contained' onClick={handleSubmit((v) => console.log(v))}>
                        Sign in
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};
