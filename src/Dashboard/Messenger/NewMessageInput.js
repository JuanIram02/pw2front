import React, {useState} from 'react';
import {styled} from '@mui/system';
import { connect } from 'react-redux';
import { Icon, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const MainContainer=styled("div")({
   height:"60px",
   width:"100%",
   display:"flex",
   alignItems:"center",
   justifyContent:"center", 
});

const Input=styled('input')({
    backgroundColor:'#47C0A7',
    width:'98%',
    height:'44px',
    color:'white',
    border:'none',
    borderRadius:'8px',
    fontSize:'14px',
    padding:'0 10px',
})

const NewMessageInput = ({chosenChatDetails}) => {
    const [message, setMessage]=useState("");

    const handleMessageValueChange=(event)=>{
        setMessage(event.target.value);
    }

    const handleKeyPressed=(event)=>{
        if(event.key==="Enter"){
            handleSendMessage();
        }
    };

    const handleSendMessage=()=>{
        if(message.length>0){
            sendDirectMessage({
                receiverUserId: chosenChatDetails.id,
                content: message
            });
            setMessage("");
        }
    }

    return (
        <MainContainer>
            <Input
                placeholder={`Write message to ${chosenChatDetails.name}`}
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handleKeyPressed}
            />
            <IconButton onClick={()=>document.querySelector(".attachFile").click()}><AttachFileIcon/></IconButton>
            <input className='attachFile' hidden type={"file"}></input>
            <IconButton><LocationOnIcon/></IconButton>
        </MainContainer>
    );
};

const mapStoreStateToProps=({chat})=>{
    return{
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(NewMessageInput);