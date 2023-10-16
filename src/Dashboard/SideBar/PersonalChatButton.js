import React from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

const PersonalChatButton = ({onClick, setChosenChatDetails}) => {

    
    return (
        <Button
            onClick={onClick}
            style={{
                width:'48px',
                height:'48px',
                borderRadius:'16px',
                margin:0,
                padding:0,
                minWidth:0,
                marginTop:'10px',
                color:'White',
                backgroundColor:'#47C0A7',
            }}
        >
            <PersonIcon/>
        </Button>
    );
};

export default PersonalChatButton;