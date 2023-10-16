import {Checkbox, DialogTitle, FormControlLabel, Select, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import MultipleSelectChip from './SelectUsers';
import InputWithLabel from '../../shared/components/InputWithLabel';
import { connect } from 'react-redux';

const AddSubGroupDialog = ({
    isDialogOpen,
    closeDialogHandler,
    users
}) => {
    const [isFormValid, setIsFormValid]=useState('');
    const [name, setName]=useState('');

    const handleCreateSubgroup=()=>{
        //create group
    }

    const handleCloseDialog=()=>{
        closeDialogHandler();
        setName('');
    };

/*     useEffect(()=>{
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);
 */
    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Nuevo Subgrupo</Typography>
                </DialogTitle>
                <DialogContent>
                    <InputWithLabel
                        label='Nombre'
                        type='text'
                        value={name}
                        setValue={setName}
                        placeholder=""
                        />
                        <Typography>
                            Seleccione los usuarios que quiere añadir
                        </Typography>
                        <MultipleSelectChip users={users}></MultipleSelectChip>
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleCreateSubgroup}
                        disabled={/* !isFormValid */ false}
                        label='Crear'
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

const mapStoreStateToProps = ({ users }) =>{
    return{
        ...users,
    };
};

export default connect(mapStoreStateToProps)(AddSubGroupDialog);