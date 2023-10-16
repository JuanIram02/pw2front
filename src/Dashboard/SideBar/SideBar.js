import React from 'react';
import {styled} from '@mui/system';
import MainPageButton from './MainPageButton'
import PersonalChatButton from './PersonalChatButton'

const MainContainer=styled('div')({
    width:"72px",
    height:"99%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"rgba(6, 88, 147,0.8)",
    borderRadius:"20px",
    margin:"5px",
    marginTop:"3px"
});

const SideBar = ({groups, chat}) => {
    return (
        <MainContainer>
            <MainPageButton onClick={groups}/>
            <PersonalChatButton onClick={chat}/>
        </MainContainer>
    );
};

export default SideBar;