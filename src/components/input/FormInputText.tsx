import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormInputProps } from './FormInputProps';
import { InputTextForm } from './MuiInput';

export const FormInputText = ({ name, control, label }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size='small'
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant='outlined'
                />
            )}
        />
    );
};

export const FormInputText2 = ({ name, control, rules, label, ...rest }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                <InputTextForm
                    helperText={error ? error.message : null}
                    // size='small'
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    {...rest}
                    // variant='outlined'
                />
            )}
        />
    );
};
