import React, {useEffect, useState} from 'react';
import {styled} from '@mui/system';
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import Room from './Room/Room';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authActions';
import AppBarGroups from './AppBar/AppBarGroups';
import MessengerGroups from './Messenger/MessengerGroups';
import { setChosenChatDetails } from '../store/actions/chatActions';
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';
import { logout } from '../shared/utils/auth';

const Wrapper=styled('div')({
    width:'100%',
    height:'100vh',
    display:'flex',
    backgroundImage: 'linear-gradient(#179CBC 0%, #FBE4A3 100%)'
})


const Dashboard=({setUserDetails,isUserInRoom})=>{
    useEffect(()=>{
        const userDetails=localStorage.getItem("user");
        if(!userDetails){
            logout();
        }else{
            //console.log(userDetails)
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
        }
    }, []);

    const[isGroupsShow, setIsGroupsShow]=useState(true);

    const showGroups=()=>{
        setIsGroupsShow(true);
        setChosenChatDetails({id:"", name:""}, "");
    };

    const showChats=()=>{
        setIsGroupsShow(false);
        setChosenChatDetails({id:"", name:""}, "");
    };


    return <Wrapper>
        <SideBar 
        groups={showGroups}
        chat={showChats}
        />
        <FriendsSideBar isGroup={isGroupsShow}/>
        {isGroupsShow?<MessengerGroups/>:<Messenger/>}
        {isGroupsShow?<AppBarGroups/>:<AppBar/>}
        {isUserInRoom && <Room/>}
    </Wrapper>;
};

const mapActionsToProps=(dispatch)=>{
    return{
        ...getActions(dispatch),
    }
}

const mapStoreStateToProps=({room})=>{
    return{
        ...room,
    };
};

export default connect(mapStoreStateToProps,mapActionsToProps)(Dashboard);