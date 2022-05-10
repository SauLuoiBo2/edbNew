import { Stack } from '@mui/material';
import { Button } from 'components';
import { MuiTableWrapper } from 'components/table';
import { Modal } from 'example';
import { ModalCreateNew } from 'example/modal';
import { useIsOpen } from 'hooks';
import React from 'react';
import { CreateConfig } from 'screens';

export const QuestionType = () => {
    const modal = useIsOpen();
    return (
        <Stack spacing={2} pt={1}>
            <CreateConfig.QuestionType isOpen={modal.isOpen} onClose={modal.handleToggle} />
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
        name: 'Loại câu hỏi',
        width: 200,
    },
    {
        name: 'Mã câu hỏi',
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
