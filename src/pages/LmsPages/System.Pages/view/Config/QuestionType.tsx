import { Stack } from '@mui/material';
import { queryQuestionType } from 'api/queries/query/config';
import { Button } from 'components';
import { MuiTableWrapper, MuiTableCell, MuiTableRow } from 'components/table';

import { Modal } from 'example';
import { ModalCreateNew } from 'example/modal';
import { useIsOpen } from 'hooks';
import React from 'react';
import { CreateConfig } from 'screens';

export const QuestionType = () => {
    const modal = useIsOpen();
    const { useQuestionType } = queryQuestionType();

    const { data, isLoading } = useQuestionType();

    return (
        <Stack spacing={2} pt={1}>
            <CreateConfig.QuestionType isOpen={modal.isOpen} onClose={modal.handleToggle} />
            <Button.LmsButton.AddNew onClick={modal.handleToggle} />
            <MuiTableWrapper dataColumn={dataColumn}>
                {data?.data &&
                    data.data?.data.map((data: any, i: any) => {
                        return (
                            <MuiTableRow key={i}>
                                <MuiTableCell align='center'>{i + 1}</MuiTableCell>
                                <MuiTableCell align='center'>{data.name}</MuiTableCell>
                                <MuiTableCell align='center'>{data.code}</MuiTableCell>
                                <MuiTableCell align='center'>{data.description}</MuiTableCell>
                                <MuiTableCell align='center'>hi</MuiTableCell>
                            </MuiTableRow>
                        );
                    })}
            </MuiTableWrapper>
            {isLoading && <div>loadding</div>}
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
