import React, { useEffect, useMemo, useState } from 'react';
import { Flex } from 'reflexbox';
import { get, getDatabase, ref } from 'firebase/database';
import { getApp } from 'firebase/app';
import { Typography } from '@mui/material';
import moment from 'moment';

type CurrentEvent = {
    name: string;
    from: Date;
    until: Date;
    backdrop: string;
}

// eslint-disable-next-line no-shadow
enum EventState {
    PLANNED,
    HAPPENING,
    FINISHED,
}

const dateFormat = 'DD MMMM';

export const CurrentEventDisplay: React.FC<{}> = () => {
    const [currentEvent, setCurrentEvent] = useState<CurrentEvent | undefined>(undefined);

    const today = useMemo(() => new Date('8/12/2022'), []);

    useEffect(() => {
        const db = getDatabase(getApp());
        get(ref(db, 'currentEvent'))
            .then((snapshot) => {
                const {
                    name, backdrop, from, until
                } = snapshot.val();
                const event = {
                    name,
                    backdrop,
                    from: new Date(from),
                    until: new Date(until),
                };
                setCurrentEvent(event);
            });
    }, []);

    // TODO: Say current event is being loaded
    if (!currentEvent) {
        return (
            <>
            </>
        );
    }

    const totalDays = moment(currentEvent.until).diff(currentEvent.from, 'days') + 1;
    let eventState;
    if (moment(currentEvent.from).isSameOrBefore(today) && moment(currentEvent.until).isSameOrAfter(today)) {
        eventState = EventState.HAPPENING;
    } else if (moment(currentEvent.from).isAfter(today)) {
        eventState = EventState.PLANNED;
    } else {
        eventState = EventState.FINISHED;
    }

    return (
        <Flex
            style={{
                background: `url(${currentEvent.backdrop})`,
                backgroundSize: 'cover',
                boxShadow: 'inset 0 0 0 2000px rgba(35, 0, 35, 0.65)',
            }}
            py='80px'
            width='100%'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h6' fontSize='1rem' color='white'>
                The next event is...
            </Typography>
            <Typography variant='h3' color='white'>
                {currentEvent.name}
                !
            </Typography>
            <Typography variant='h6' fontSize='1rem' color='white'>
                {moment(currentEvent.from).format(dateFormat)}
                {' - '}
                {moment(currentEvent.until).format(dateFormat)}
            </Typography>
            {eventState === EventState.PLANNED && (
                <Typography variant='h6' fontSize='1rem' color='white'>
                    {moment(currentEvent.from).diff(today, 'days')}
                    {' days to go!'}
                </Typography>
            )}
            {eventState === EventState.HAPPENING && (
                <Typography variant='h6' fontSize='1rem' color='white'>
                    {'Day '}
                    {moment(today).diff(currentEvent.from, 'days') + 1}
                    {' of '}
                    {totalDays}
                    !
                </Typography>
            )}
            {eventState === EventState.FINISHED && (
                <Typography variant='h6' fontSize='1rem' color='white'>
                    Until next time!
                </Typography>
            )}
        </Flex>
    );
};
