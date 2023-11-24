import { openAlertMessage } from "./alertActions";
import * as api from '../../api';

export const groupsActions = {
    SET_GROUPS: 'GROUPS.SET_GROUPS',
};

export const setGroups = (groups) =>{
    return{
        type:groupsActions.SET_GROUPS,
        groups,
    };
};
