import React from 'react';
import {styled} from "@mui/system";
import { connect } from 'react-redux';
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";
import SubgroupSideBar from './SubgroupSideBar/SubgroupSideBar';

const MainContainer=styled('div')({
    flexGrow:1,
    backgroundColor:"rgba(6, 88, 147,0.5)",
    margin:"10px",
    marginTop:"60px",
    padding:"10px",
    display:"flex",
    borderRadius:"20px",
})

const MessengerGroups = ({chosenChatDetails}) => {
    return (
        
        <MainContainer>
            {!chosenChatDetails ? <></>:<SubgroupSideBar/>}
            {!chosenChatDetails ? <WelcomeMessage/>:<MessengerContent chosenChatDetails={chosenChatDetails}/>}
        </MainContainer>
    );
};

const mapStoreStateToProps=({chat})=>{
    return{
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(MessengerGroups);