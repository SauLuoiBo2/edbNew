import { Stack, Box, Tab, Tabs } from '@mui/material';
import { View } from 'components';
import React from 'react';
import { TabConfig, TabViewConfig } from './components';

import { alpha, styled } from '@mui/material/styles';

export const ConfigPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Stack>
            <View.PaperView>
                <Box width={'100%'}>
                    <MuiTabs
                        value={value}
                        onChange={handleChange}
                        textColor='primary'
                        indicatorColor='primary'
                        aria-label='secondary tabs example'
                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        {dataTabConfig.map((data, i) => {
                            return <Tab value={i} key={i} label={data.name} />;
                        })}
                    </MuiTabs>
                </Box>
            </View.PaperView>
            <View.PaperView mt={2}>
                <TabConfig tab={value} />
            </View.PaperView>
        </Stack>
    );
};

const MuiTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-flexContainer': {
        flexWrap: 'wrap',
        gap: '10px',

        '&:selected': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            color: theme.palette.primary.main,
        },
    },

    '& .MuiButtonBase-root	': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 13,
        // width: '100%',
        color: theme.palette.info.main,
        padding: '0px 12px',
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

export const dataTabConfig = [
    {
        name: 'Dạng đề',
    },
    {
        name: 'Thời gian làm bài',
    },
    {
        name: 'Loại câu hỏi',
    },
    {
        name: 'Cách tính điểm',
    },
    {
        name: '% câu hỏi trùng',
    },
    {
        name: 'Thời gian gửi link',
    },
];
