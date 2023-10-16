import {Checkbox, DialogTitle, FormControlLabel, Select, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {validateName} from '../../shared/utils/validators'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import MultipleSelectChip from './SelectUsers';
import InputWithLabel from '../../shared/components/InputWithLabel';
import { connect } from 'react-redux';
import { createGroup } from '../../realtimeCommunication/socketConnection';

const AddGroupDialog = ({
    isDialogOpen,
    closeDialogHandler,
    users,
}) => {
    const [isFormValid, setIsFormValid]=useState('');
    const [name, setName]=useState('');
    const [isChecked, setIsChecked]=useState('false');
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleCreateGroup=()=>{
        createGroup(
            {
                name: name,
                participants: selectedUsers,
                isPublic: isChecked,
            },
            handleCloseDialog
        );
    }

    const handleCloseDialog=()=>{
        closeDialogHandler();
        setName('');
    };

    useEffect(()=>{
        setIsFormValid(validateName(name));
    }, [name, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Nuevo Grupo</Typography>
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
                        <MultipleSelectChip users={users} setSelectedUsers={setSelectedUsers}></MultipleSelectChip>
                        <FormControlLabel control={<Checkbox onChange={(e) => setIsChecked(e.target.checked)} />} label="Público" />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleCreateGroup}
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


export default connect(mapStoreStateToProps)(AddGroupDialog);