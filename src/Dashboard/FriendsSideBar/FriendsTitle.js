import React from 'react';
import {Typography} from '@mui/material';

const FriendsTitle = ({title}) => {
    return (
        <Typography
            sx={{
                textTransform:'uppercase',
                color:'#FFF',
                fontSize:'14px',
                marginTop:'10px'
            }}
        >
            {title}
        </Typography>
    );
};

export default FriendsTitle;