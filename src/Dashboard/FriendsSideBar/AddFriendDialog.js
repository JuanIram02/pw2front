import {DialogTitle, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {validateMail} from '../../shared/utils/validators'
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import BasicSelect from './SelectUser';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation=()=>{}
}) => {
    const [mail, setMail]=useState('');
    const [isFormValid, setIsFormValid]=useState('');

    const handleSendInvitation=()=>{
        sendFriendInvitation(
            {
                targetMailAddress: mail,
            },
            handleCloseDialog
        );
    };

    const handleCloseDialog=()=>{
        closeDialogHandler();
        setMail('');
    };

    useEffect(()=>{
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                   <Typography>Nueva Conversación</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                            Ingrese el correo electrónico del usuario con el que quiere conversar
                    </DialogContentText>
                        <InputWithLabel
                        label='Correo electrónico'
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder=""
                        />
                       {/*  <Typography sx={{textAlign:"center"}}>
                            o
                        </Typography>
                    <DialogContentText>
                            Seleccione el usuario con el que quiere conversar
                    </DialogContentText>
                        <BasicSelect></BasicSelect> */}
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={/* !isFormValid */ false}
                        label='Enviar invitación'
                        additionalStyles={{
                            marginLeft:'15px',
                            marginRight:'15px',
                            marginBottom:'10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);