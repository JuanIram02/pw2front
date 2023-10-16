import * as api from '../../api';
import {openAlertMessage} from './alertActions';

export const authAction={
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

export const getActions=(dispatch)=>{
    return{
        login:(userDetails, navigate)=>dispatch(login(userDetails, navigate)),
        register:(userDetails, navigate) => 
        dispatch(register(userDetails, navigate)),
        setUserDetails:(userDetails)=>dispatch(setUserDetails(userDetails)),
    };
};

const setUserDetails=(userDetails)=>{
    return{
        type: authAction.SET_USER_DETAILS,
        userDetails,
    };
};

const login=(userDetails, navigate)=>{
    return async (dispatch)=>{
        const response = await api.login(userDetails);
        console.log(response);
        if(response.ok){
            const userDetail = response.json.data;
            console.log(userDetail)
            localStorage.setItem('user', JSON.stringify(userDetail));
            dispatch(setUserDetails(userDetail));
            navigate("/dashboard");
        }else{
            dispatch(openAlertMessage(response?.exception?.response.data));
        }
    };
};

const register=(userDetails, history)=>{
    return async (dispatch)=>{
        const response= await api.register(userDetails);
        console.log(response);
        if(response.ok){
            const userDetail = response.json.data;
            console.log(userDetail)
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            history("/dashboard");
        }else{
            console.log("error");
            dispatch(openAlertMessage(response?.exception?.response.data));
        }
    };
};