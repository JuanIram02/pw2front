import { Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import {styled} from '@mui/system';

const MainContainer=styled('div')({
    right: '0',
    top:'0',
    height:'48px',
    backgroundColor:"rgba(6, 88, 147,0)",
    width:"100%",
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 15px'
});

const ChosenOptionLabelGroup = ({name}) => {
    return (
        <MainContainer>
          <Typography
            sx={{fontSize:"16px", color:"white", fontWeight:"bold"}}
        >{`${name?name:""}`}</Typography>
        </MainContainer>
    );
};

const mapStoreStateToProps=(state)=>{
    return{
        name:state.chat.chosenChatDetails?.name,
    }
}

export default connect(mapStoreStateToProps)(ChosenOptionLabelGroup);