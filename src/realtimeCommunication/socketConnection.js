import io from 'socket.io-client';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import { setGroups } from '../store/actions/groupsActions';
import store from '../store/store';
import {updateDirectChatHistoryIfActive, updateGroupChatHistoryIfActive} from '../shared/utils/chat';
import { setUsers } from '../store/actions/usersActions';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    
    const jwtToken = userDetails.token;
    
    socket = io('http://localhost:5002',{
        auth:{
            token: jwtToken,
        },
    });

    socket.on('connect', ()=>{
        console.log('succesfully connected with socket.io server');
        console.log(socket.id);
    });

    socket.on('friends-invitations', (data) => {
        const {pendingInvitations} = data;
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });

    socket.on('online-users', (data)=>{
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on('direct-chat-history', (data)=>{
        updateDirectChatHistoryIfActive(data);
        console.log(data);
    });

    socket.on('all-users',(data)=>{
        const { users } = data;
        console.log(users)
        store.dispatch(setUsers(users));
    })

    socket.on('groups-list', (data) =>{
        const {groups} = data;
        store.dispatch(setGroups(groups));
    });

    socket.on('group-chat-history', (data)=>{
        console.log(data);
        updateGroupChatHistoryIfActive(data);
    });
};

export const sendDirectMessage = (data) => {
    socket.emit("direct-message", data);
};

export const sendGroupMessage = (data) => {
    console.log(data);
    socket.emit("group-message", data);
};

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data);
    
};

export const createGroup = (data, closeDialogHandler) =>{
    socket.emit("create-group", data);
    closeDialogHandler();
}

export const createSubgroup = (data, closeDialogHandler) =>{
    socket.emit("create-subgroup", data);
    closeDialogHandler();
}

export const getGroupChatHistory = (data) => {
    socket.emit("group-chat-history", data);
};
