import React from 'react';
import { MuiTableWrapper } from 'components/table';
import { Stack } from '@mui/material';
import { ModalCreateNew } from 'example/modal';
import { Button } from 'components';
import { useIsOpen } from 'hooks';
import { CreateConfig } from 'screens';

export const ExamTime = () => {
    const modal = useIsOpen();
    return (
        <Stack spacing={2} pt={1}>
            <CreateConfig.ExamTime isOpen={modal.isOpen} onClose={modal.handleToggle} />
            <Button.LmsButton.AddNew onClick={modal.handleToggle} />
            <MuiTableWrapper dataColumn={dataColumn}></MuiTableWrapper>
        </Stack>
    );
};

const dataColumn = [
    {
        name: 'STT',
        width: 50,
    },
    {
        name: 'Thời gian',
        width: 200,
    },
    {
        name: 'Mô tả',
        width: 200,
    },
    {
        name: 'Thao tác',
        width: 200,
    },
];
