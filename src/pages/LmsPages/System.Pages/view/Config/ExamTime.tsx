import React from 'react';
import { MuiTableWrapper, MuiTableCell, MuiTableRow } from 'components/table';
import { Stack } from '@mui/material';

import { Button } from 'components';
import { useIsOpen } from 'hooks';
import { CreateConfig } from 'screens';
import { queryExamTime } from 'api/queries/query/config/queryExamTime';

export const ExamTime = () => {
    const modal = useIsOpen();
    const { useData } = queryExamTime();
    const data: any = useData().data?.data;
    console.log(data);
    return (
        <Stack spacing={2} pt={1}>
            <CreateConfig.ExamTime isOpen={modal.isOpen} onClose={modal.handleToggle} />
            <Button.LmsButton.AddNew onClick={modal.handleToggle} />
            <MuiTableWrapper dataColumn={dataColumn}>
                {data &&
                    data.data?.map((data: any, i: any) => {
                        return (
                            <MuiTableRow key={i}>
                                <MuiTableCell align='center'>{i + 1}</MuiTableCell>
                                <MuiTableCell align='center'>{data.time}</MuiTableCell>
                                <MuiTableCell align='center'>{data.description}</MuiTableCell>
                                <MuiTableCell align='center'>hi</MuiTableCell>
                            </MuiTableRow>
                        );
                    })}
            </MuiTableWrapper>
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
