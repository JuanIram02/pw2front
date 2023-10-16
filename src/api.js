import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002',
    timeout: 1000
});

apiClient.interceptors.request.use((config)=>{
    const userDetails=localStorage.getItem('user');

    if(userDetails){
        const token=JSON.parse(userDetails).token;
        config.headers.Authorization=`Bearer ${token}`;
    }

    return config;
}, (error)=>{
    return Promise.reject(error);
});

//public routes

export const login=async(data)=>{
    try{
          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }
      
        return await fetch("http://localhost:5002/auth/login", config);
    }catch (exception){
        return{
            error:true,
            exception,
        };
        
    }
};

export const register = async (data)=>{
    try{
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
        console.log(config)
      return await fetch("http://localhost:5002/auth/register", config);
  }catch (exception){
      return{
          error:true,
          exception,
      };
      
  }
};

//secure routes
export const sendFriendInvitation = async (data) => {
    console.log(data);
    try{
        return await apiClient.post('/friend-invitation/invite', data);
    } catch (exception){
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

export const acceptFriendInvitation = async (data) => {
    try{
        return await apiClient.post('/friend-invitation/accept', data);
    }catch (exception){
        checkResponseCode(exception);
        return{
            error: true,
            exception,
        };
    }
};

export const rejectFriendInvitation = async (data) => {
    try{
        return await apiClient.post('/friend-invitation/reject', data);
    }catch (exception){
        checkResponseCode(exception);
        return{
            error: true,
            exception,
        };
    }
};

export const createGroup = async (data) => {
    try{
        return await apiClient.post('/groups/create-group', data);
    }catch(exception){
        checkResponseCode(exception);
        return{
            error: true,
            exception,
        };
    }
};

const checkResponseCode = (exception) => {
    const responseCode= exception?.response?.status;

    if(responseCode){
        (responseCode===401 || responseCode===403) && logout();
    }
};