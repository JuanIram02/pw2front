import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import * as roomHandler from '../../realtimeCommunication/roomHandler'

const CreateRoomButton = () => {
    const createNewRoomHandler=()=>{
        //creating a room and sending info to the server about this
        roomHandler.createNewRoom();
    };
    return (
        <Button
        onClick={createNewRoomHandler}
            style={{
                width:'48px',
                height:'48px',
                borderRadius:'16px',
                margin:0,
                padding:0,
                minWidth:0,
                marginTop:'auto',
                color:'White',
                backgroundColor:'transparent',
            }}
        >
            <VideocamIcon/>
        </Button>
    );
};

export default CreateRoomButton;