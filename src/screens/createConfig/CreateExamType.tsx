import { FormControl, InputLabel, Stack } from '@mui/material';
import { examTypeApi, useExamTypeAdd } from 'api';
import { queryExamType } from 'api/queries/query/config';
import { LmsContant } from 'assets/contants';
import { Modal } from 'components';
import { LmsButton } from 'components/button';
import { MuiInput } from 'components/input';
import { FormViewOne } from 'components/view';
import React from 'react';
import { ModalBasicI } from './modal';

import { FormProvider, useForm } from 'react-hook-form';
import { FormInputText, FormInputText2 } from 'components/input/FormInputText';

type IFormInput = {
    name: string;
    description: string | null;
};

export const ExamType = (props: ModalBasicI) => {
    const ha = examTypeApi.useAdd();

    const { mutate }: any = ha;

    const methods = useForm<IFormInput>();
    const { handleSubmit, reset, control, setValue, watch } = methods;
    const onSubmit = (data: IFormInput) => mutate(data);
    return (
        <Modal.BasicModalTitle onClose={props.onClose} isOpen={props.isOpen} title='Thêm mới dạng đề thi'>
            <FormViewOne>
                <FormInputText2
                    required
                    placeholder='DSADSA'
                    name='name'
                    control={control}
                    label={LmsContant.CONFIG.EXAM_TYPE}
                    rules={{
                        required: 'Không được để trống',
                        // pattern: {
                        //     value: /^[0-9]{10}/i,
                        //     message: 'Số điện thoại không hợp lệ',
                        // },
                    }}
                />
                <FormInputText2 name='description' control={control} label={LmsContant.DES} />
            </FormViewOne>
            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <LmsButton.Cancel onClick={props.onClose} />
                <LmsButton.AddNew onClick={handleSubmit(onSubmit)} />
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
