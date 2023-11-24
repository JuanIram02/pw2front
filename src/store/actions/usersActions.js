export const usersActions = {
    SET_USERS: 'USERS.SET_USERS',
};

export const setUsers = (users) => {
    return{
        type: usersActions.SET_USERS,
        users,
    };
};
