import {usersActions} from '../actions/usersActions';

const initState = {
    users:[]
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case usersActions.SET_USERS:
            return{
                ...state,
                users: action.users,
            };
        default:
            return state;
    }
};

export default reducer;