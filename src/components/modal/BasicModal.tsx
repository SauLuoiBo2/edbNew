import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal, { ModalProps } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Stack } from '@mui/material';

interface ModalP {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    w?: string | number;
    mw?: string | number;
}

interface ModalTitleP extends ModalP {
    title?: string;
}

export const BasicModal = ({ children, isOpen, onClose, w, mw }: ModalP) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style} width={w || 400} maxWidth={mw || '95%'}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export const BasicModalTitle = ({ children, title, ...rest }: ModalTitleP) => {
    return (
        <BasicModal {...rest}>
            <Stack direction={'column'} width={'100%'}>
                <Stack py={1} width={'100%'} bgcolor={'grey.400'} alignItems={'center'}>
                    <h3>{title || 'title'}</h3>
                </Stack>
                <Box width={'100%'} p={2}>
                    {children}
                </Box>
            </Stack>
        </BasicModal>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: 5,
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
    //   width: 400,
    bgcolor: 'background.paper',
    maxHeight: 600,
    // overflowY: "scroll",
    //   border: "2px solid #000",
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',
    //   p: 4,
};
