import store from '../../store/store';
import { setMessages } from '../../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {
    const {participants, messages}=data;

    //find id of user from token and id from active conversation
    const receiverId= store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails._id;

    if(receiverId && userId){
        const userInConversation = [receiverId, userId];

        updateChatHistoryIfSameConversationActive({
            participants,
            userInConversation,
            messages,
        });
    }
};

export const updateGroupChatHistoryIfActive = (data) => {
    const {messages, id}=data;

    //find id of user from token and id from active conversation
    const groupId= store.getState().chat.chosenChatDetails?.id;
    console.log(id);
    console.log(groupId);

    if(groupId){
        const groupInConversation = groupId;

        updateChatGroupIfSameConversationActive({
            id,
            groupInConversation,
            messages,
        });
    }
};

const updateChatHistoryIfSameConversationActive = ({
    participants,
    userInConversation,
    messages
})=>{
    const result = participants.every(function(participantId){
        return userInConversation.includes(participantId);
    });

    if(result){
        store.dispatch(setMessages(messages));

    }
};

const updateChatGroupIfSameConversationActive = ({
    id,
    groupInConversation,
    messages
})=>{

    console.log(id);
    console.log(groupInConversation);

    if(groupInConversation===id){

        store.dispatch(setMessages(messages));

    }
};