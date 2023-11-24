import store from '../../store/store';
import { setMessages } from '../../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {
    const {participants, messages}=data;

    //find id of user from token and id from active conversation
    const receiverId= store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails._id;

    if(receiverId && userId){
        const userInConversation = [ receiverId, userId];
        console.log("actu")
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
    console.log(participants)
    console.log(userInConversation)
    const participantIds = participants.map(participant => participant.id);
    const result = participantIds.every(participantId => userInConversation.includes(participantId));

    console.log(result)

    if(result){
        console.log("entro")
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