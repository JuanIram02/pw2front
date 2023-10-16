import React, {useState} from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import AddSubGroupDialog from './AddSubGroupDialog';


const additionalStyles={
    marginTop:'10px',
    marginLeft:'5px',
    width: '80%',
    height: '30px',
    background: '#179CBC'
}

const AddSubgroupButton = () => {

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
                label='Agregar subgrupo'
                onClick={handleOpenAddFriendDialog}
            />
            <AddSubGroupDialog
            isDialogOpen={isDialogOpen}
            closeDialogHandler={handleCloseAddFriendDialog}
            />
        </>
    );
};

export default AddSubgroupButton;