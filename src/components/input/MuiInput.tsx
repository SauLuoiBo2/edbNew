import { alpha, styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { FormControl, InputLabel, TextField } from '@mui/material';

export const TextInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export const IconInput = styled(TextField)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(0),
    },

    '& .MuiInputLabel-root': {
        fontSize: 16,
        transform: 'translate(14px, 10px) scale(1)',
    },

    '& .MuiInputLabel-root.Mui-focused': {
        transform: 'translate(14px, -15px) scale(0.75)',
    },

    '& .MuiSvgIcon-root ': {
        fontSize: 40,
        padding: 0,
    },
    // '& .MuiOutlinedInput-root': { padding: 0 },

    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        padding: '0 10px',
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },

    '& .MuiFormHelperText-root': {
        fontSize: 16,
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        // border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '12px 0px',
        transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),

        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        // '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        // },
    },
}));

export const MuiInputLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: '20px',
    color: theme.palette.common.black,
}));

interface InputTextFormI extends InputBaseProps {
    label?: string | undefined;
    required?: boolean;
}

export const InputTextForm = (props: InputTextFormI) => {
    return (
        <FormControl variant='standard' required={props.required}>
            <MuiInputLabel shrink htmlFor='bootstrap-input'>
                {props.label}:
            </MuiInputLabel>
            <TextInput required={props.required} />
        </FormControl>
    );
};
