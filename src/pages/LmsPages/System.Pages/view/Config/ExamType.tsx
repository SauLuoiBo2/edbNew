import { Stack } from '@mui/material';
import { Button } from 'components';
import { MuiTableWrapper, MuiTableCell, MuiTableRow } from 'components/table';
import { Modal } from 'example';
import { CreateConfig } from 'screens';
import { useIsOpen } from 'hooks';
import React from 'react';
import { hookConfig } from 'api/hooks';

export const ExamType = () => {
    const modal = useIsOpen();
    const { search } = hookConfig.useExamType();

    return (
        <Stack spacing={2} pt={1}>
            <CreateConfig.ExamType isOpen={modal.isOpen} onClose={modal.handleToggle} />
            <Button.LmsButton.AddNew onClick={modal.handleToggle} />
            <MuiTableWrapper dataColumn={dataColumn}>
                {search.data &&
                    search.data.data.map((data: any, i: any) => {
                        return (
                            <MuiTableRow key={i}>
                                <MuiTableCell align='center'>{i + 1}</MuiTableCell>
                                <MuiTableCell align='center'>{data.name}</MuiTableCell>
                                <MuiTableCell align='center'>{data.description}</MuiTableCell>
                                <MuiTableCell align='center'>hi</MuiTableCell>
                            </MuiTableRow>
                        );
                    })}
            </MuiTableWrapper>
            {search.isLoading ? <div>loading...</div> : null}
        </Stack>
    );
};

const dataColumn = [
    {
        name: 'STT',
        width: 50,
    },
    {
        name: 'Loại đề thi',
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
