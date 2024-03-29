export const roomActions={
    OPEN_ROOM:'ROOM.OPEN_ROOM',
    SET_ROOM_DETAILS:'ROOM.SET_ROOM_DETAILS',
    SET_ACTIVE_ROOMS:'ROOM.SET_ACTIVE_ROOMS',
    SET_LOCAL_STREAM:'ROOM.SET_LOCAL_STREAM',
    SET_AUDIO_ONLY:'ROOM.SET_AUDIO_ONLY',
    SET_SCREEN_SHARE_STREAM:'ROOM.SET_SCREEN_SHARE_STREAM',
};

export const setOpenRoom=(isUserRoomCreator=false, isUserInRoom=false)=>{
    return {
        type:roomActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom,
    };
};