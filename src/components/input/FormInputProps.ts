import { StandardTextFieldProps } from '@mui/material';

export interface FormInputProps extends StandardTextFieldProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    rules?: any;
}
