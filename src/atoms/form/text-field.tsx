import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextField as MUITextField } from '@mui/material';

type TextFieldProps<T> = {
    control: Control<T, any>;
    name: string;
    label: string;
    defaultValue?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    type?: React.InputHTMLAttributes<unknown>['type'];
}

export const TextField = <S, >({
    control, name, label, defaultValue = '', variant = 'filled', type = ''
}: TextFieldProps<S>) => (
    <Controller
        name={name as any}
        control={control}
        defaultValue={defaultValue as any}
        rules={{}}
        render={({ field, fieldState }) => (
            <MUITextField
                style={{
                    width: '100%'
                }}
                label={label}
                type={type}
                variant={variant}
                value={field.value}
                onChange={field.onChange}
                helperText={fieldState.error?.message || null}
            />
        )}
    />
);
