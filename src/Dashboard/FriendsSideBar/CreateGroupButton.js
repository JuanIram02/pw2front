import React, {useState} from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddGroupDialog from './AddGroupDialog';

const additionalStyles={
    marginTop:'10px',
    marginLeft:'5px',
    width: '80%',
    height: '30px',
    background: '#179CBC'
}

const CreateGroupButton = () => {

    const [isDialogOpen, setIsDialogOpen]=useState(false);

    const handleOpenAddFriendDialog=()=>{
        setIsDialogOpen(true);
    };

    const handleCloseAddFriendDialog=()=>{
        setIsDialogOpen(false);
    }

    return (
        <>
            <CustomPrimaryButton
                additionalStyles={additionalStyles}
                label='Create Group'
                onClick={handleOpenAddFriendDialog}
            />
            <AddGroupDialog
            isDialogOpen={isDialogOpen}
            closeDialogHandler={handleCloseAddFriendDialog}
            />
        </>
    );
};

export default CreateGroupButton;