import React from 'react';
import {styled} from '@mui/system';
import SubgroupsListItem from './SubgroupsListItem';

const DUMMY_FRIENDS=[
  
];

const MainContainer=styled('div')({
    flexGrow:1,
    width:"100%",
});

const SubgroupsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((g)=>(
                <SubgroupsListItem
                    name={g.name}
                    id={g.id}
                    key={g.id}
                />
            ))}
        </MainContainer>
    );
};

export default SubgroupsList;