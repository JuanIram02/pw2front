import {authAction} from "../actions/authActions";

const initState={
    userDetails:null
};

const reducer=(state = initState, action)=>{ //If an action is dispatch we´ll be able to change our state
    switch(action.type){
        case authAction.SET_USER_DETAILS:
            return{
                ...state,
                userDetails: action.userDetails,
            };
        default:
            return state;
    }
};

export default reducer;