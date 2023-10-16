import React from 'react';
import  Button  from '@mui/material/Button';
import  Avatar from '../../../shared/components/Avatar';
import { Typography } from '@mui/material';
import OnlineIndicator from './OnlineIndicator';
import {chatTypes, getActions} from "../../../store/actions/chatActions";
import {connect} from 'react-redux';

const FriendsListItem = ({id, name, isOnline, setChosenChatDetails}) => {

    const handleChoosenActiveConversation=()=>{
        setChosenChatDetails({id:id, name:name, chatType:"DIRECT"}, chatTypes.DIRECT);
    };


    return (
        <Button
            onClick={handleChoosenActiveConversation}
            style={{
                width:'100%',
                height:'42px',
                marginTop:'10px',
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-start',
                textTransform:'none',
                color:'black',
                position:'relative',
            }}
        >
            <Avatar username={name}/>
            <Typography
                style={{
                    marginLeft:'7px',
                    fontWeight:700,
                    color:'#fff',
                }}
                variant="subtitle1"
                align="left"
            >
                {name}
            </Typography>
            {isOnline && <OnlineIndicator/>}
        </Button>
    );
};

const mapActionsToProps=(dispatch)=>{
    return{
        ...getActions(dispatch),
    };
};

export default connect(null,mapActionsToProps)(FriendsListItem);