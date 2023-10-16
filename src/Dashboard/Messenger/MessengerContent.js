import React, { useEffect } from 'react';
import {styled} from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory, getGroupChatHistory } from '../../realtimeCommunication/socketConnection';
import NewGroupMessageInput from './NewGroupMessageInput';

const Wrapper=styled("div")({
    flexGrow:1,
});

const MessengerContent = ({chosenChatDetails}) => {
    useEffect(()=>{
        if(chosenChatDetails.chatType==="DIRECT"){
            console.log("direct");
            getDirectChatHistory({
                receiverUserId: chosenChatDetails.id,
            });
        }else{
            console.log("group");
            getGroupChatHistory({
                groupReceiverId: chosenChatDetails.id,
            }) 
        }         
    }, [chosenChatDetails]);
    console.log(chosenChatDetails);
    return (
        <Wrapper>
            <Messages/>
            {chosenChatDetails.chatType === "DIRECT" ? <NewMessageInput/>:<NewGroupMessageInput/>}
        </Wrapper>
    );
};

export default MessengerContent;