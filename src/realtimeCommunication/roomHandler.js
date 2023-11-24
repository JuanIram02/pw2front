import store from '../store/store'
import { setOpenRoom } from '../store/actions/roomActions'

export const createNewRoom=()=>{
    store.dispatch(setOpenRoom(true,true));
}

export const leaveRoom=()=>{
    store.dispatch(setOpenRoom(false,false));
}