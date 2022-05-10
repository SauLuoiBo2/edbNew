import { FormControl, InputLabel, Stack } from '@mui/material';
import { LmsContant } from 'assets/contants';
import { Modal } from 'components';
import { LmsButton } from 'components/button';
import { MuiInput } from 'components/input';
import { FormViewOne } from 'components/view';
import React from 'react';
import { ModalBasicI } from './modal';

export const ExamType = (props: ModalBasicI) => {
    return (
        <Modal.BasicModalTitle onClose={props.onClose} isOpen={props.isOpen} title='Thêm mới dạng đề thi'>
            <FormViewOne>
                <MuiInput.InputTextForm label={LmsContant.CONFIG.EXAM_TYPE} required />
                <MuiInput.InputTextForm label={LmsContant.DES} />
            </FormViewOne>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <LmsButton.Cancel onClick={props.onClose} />
                <LmsButton.AddNew />
            </Stack>
        </Modal.BasicModalTitle>
    );
};

export const ExamTime = (props: ModalBasicI) => {
    return (
        <Modal.BasicModalTitle onClose={props.onClose} isOpen={props.isOpen} title='Thêm mới thời gian làm bài'>
            <FormViewOne>
                <MuiInput.InputTextForm label={LmsContant.CONFIG.EXAM_TIME} required />
                <MuiInput.InputTextForm label={LmsContant.DES} />
            </FormViewOne>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <LmsButton.Cancel onClick={props.onClose} />
                <LmsButton.AddNew />
            </Stack>
        </Modal.BasicModalTitle>
    );
};

export const QuestionType = (props: ModalBasicI) => {
    return (
        <Modal.BasicModalTitle onClose={props.onClose} isOpen={props.isOpen} title='Thêm mới loại câu hỏi'>
            <FormViewOne>
                <MuiInput.InputTextForm label={LmsContant.CONFIG.QUESTION_TYPE} required />
                <MuiInput.InputTextForm label={LmsContant.DES} />
            </FormViewOne>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <LmsButton.Cancel onClick={props.onClose} />
                <LmsButton.AddNew />
            </Stack>
        </Modal.BasicModalTitle>
    );
};
