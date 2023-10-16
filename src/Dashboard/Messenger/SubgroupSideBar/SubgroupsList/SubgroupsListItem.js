import React from 'react';
import  Button  from '@mui/material/Button';
import { Typography } from '@mui/material';
import {chatTypes, getActions} from "../../../../store/actions/chatActions";
import {connect} from 'react-redux';
import Avatar from '../../../../shared/components/Avatar';

const SubgroupsListItem = ({id, name, setChosenChatDetails}) => {
    
    const handleChoosenActiveConversation=()=>{
        setChosenChatDetails({id:id, name:name}, chatTypes.DIRECT);
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
                    color:'#FFF',
                }}
                variant="subtitle1"
                align="left"
            >
                {name}
            </Typography>
        </Button>
    );
};

const mapActionsToProps=(dispatch)=>{
    return{
        ...getActions(dispatch),
    };
};

export default connect(null,mapActionsToProps)(SubgroupsListItem);