import React from 'react';
import {styled} from '@mui/system';
import SubgroupsListItem from './SubgroupsListItem';

const DUMMY_FRIENDS=[
    {
        id:1,
        name:'Grupo 1'
    },
    {
        id:2,
        name:'Grupo 2'
    },{
        id:3,
        name:'Grupo 3'
    },
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