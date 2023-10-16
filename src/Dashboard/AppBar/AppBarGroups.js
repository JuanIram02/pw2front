import React from 'react';
import {styled} from '@mui/system';
import DropdownMenu from './DropdownMenu'
import ChosenOptionLabelGroup from './ChosenOptionLabelGroup';

const MainContainer=styled('div')({
    position:'absolute',
    right: '0',
    top:'0',
    height:'48px',
    backgroundColor:"rgba(6, 88, 147,0.5)",
    width:"calc(100% - 375px)",
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 15px',
    borderRadius:"10px",
    marginTop:"10px"
});

const AppBarGroups = () => {
    return (
        <MainContainer>
            <ChosenOptionLabelGroup/>
            <DropdownMenu/>
        </MainContainer>
    );
};

export default AppBarGroups;