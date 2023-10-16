import React from 'react';
import {styled} from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from "./FriendsTitle";
import FriendsList from './FriendsList/FriendsList';
import GroupsList from '../GroupsSideBar/GroupsList/GroupsList';
import PendingInvitationsList from './PendingInvitationList/PendingInvitationsList';
import CreateGroupButton from './CreateGroupButton';

const MainContainer=styled('div')({
    width:"250px",
    height:"98%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"rgba(6, 88, 147,0.6)",
    borderRadius:"20px",
    marginBotton:"10px",
    marginTop:"7px",
    marginRight:"0px",
    marginLeft:"5px"
});

const FriendsSideBar = ({isGroup}) => {
    return (
        <MainContainer>
            {isGroup?<CreateGroupButton/>:<AddFriendButton/>}
            {isGroup?<FriendsTitle title="Groups"/>:<FriendsTitle title="CHATS"/>}
            {isGroup?<GroupsList/>:<FriendsList/>}
            {isGroup?<></>:<FriendsTitle title='Invitations'/>}
            {isGroup?<></>:<PendingInvitationsList/>}
        </MainContainer>
    );
};

export default FriendsSideBar;