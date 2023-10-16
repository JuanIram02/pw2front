import React from 'react';
import {styled} from '@mui/system';
import SubgroupsList from './SubgroupsList/SubgroupsList';
import AddSubgroupButton from '../../FriendsSideBar/AddSubgroupButton';

const MainContainer=styled('div')({
    width:"250px",
    height:"98%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"rgba(6, 88, 147,0.6)",
    borderRadius:"20px",
    marginBotton:"10px",
    marginTop:"7px",
    marginRight:"0px",
    marginLeft:"5px"
});

const SubgroupSideBar = () => {
    return (
        <MainContainer>
            <AddSubgroupButton/>
            <SubgroupsList></SubgroupsList>
        </MainContainer>
    );
};

export default SubgroupSideBar;