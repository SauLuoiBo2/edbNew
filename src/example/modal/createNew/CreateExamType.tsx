import { FormControl, InputLabel, Stack } from '@mui/material';
import { LmsContant } from 'assets/contants';
import { Modal } from 'components';
import { LmsButton } from 'components/button';
import { MuiInput } from 'components/input';
import { FormViewOne } from 'components/view';
import React from 'react';
import { ModalBasicI } from './modal';

export const CreateExamType = (props: ModalBasicI) => {
    return (
        <Modal.BasicModalTitle onClose={props.onClose} isOpen={props.isOpen} title='Thêm mới dạng đề thi'>
            <FormViewOne>
                <MuiInput.InputTextForm label={LmsContant.EXAMTYPE} required />
                <MuiInput.InputTextForm label={LmsContant.DES} required />
            </FormViewOne>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <LmsButton.Cancel onClick={props.onClose} />
                <LmsButton.AddNew />
            </Stack>
        </Modal.BasicModalTitle>
    );
};
