import React from 'react';
import Button from '@mui/material/Button';
import GroupsIcon from'@mui/icons-material/Groups';

const MainPageButton = ({onClick}) => {
    return (
        <Button
            onClick={onClick}
            style={{
                width:'48px',
                height:'48px',
                borderRadius:'16px',
                margin:0,
                padding:0,
                minWidth:0,
                marginTop:'10px',
                color:'White',
                backgroundColor:'#47C0A7',
            }}
        >
            <GroupsIcon/>
        </Button>
    );
};

export default MainPageButton;