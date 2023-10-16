import React, {useState} from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles={
    marginTop:'10px',
    marginLeft:'5px',
    width: '80%',
    height: '30px',
    background: '#179CBC'
}

const AddFriendButton = () => {

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
                label='Nueva conversación'
                onClick={handleOpenAddFriendDialog}
            />
            <AddFriendDialog 
            isDialogOpen={isDialogOpen}
            closeDialogHandler={handleCloseAddFriendDialog}
            />
        </>
    );
};

export default AddFriendButton;