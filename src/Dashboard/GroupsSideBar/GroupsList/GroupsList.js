import React from 'react';
import {styled} from '@mui/system';
import GroupsListItem from './GroupsListItem';
import { connect } from 'react-redux';

const DUMMY_GROUPS=[
    {
        id:1,
        groupName:'BDM'
    },
    {
        id:2,
        groupName:'POI'
    },{
        id:3,
        groupName:'GWC'
    },
];

const MainContainer=styled('div')({
    flexGrow:1,
    width:"100%",
});

const GroupsList = ({groups}) => {
    return (
        <MainContainer>
            {groups.map((g)=>(
                <GroupsListItem
                groupName={g.name}
                    id={g.id}
                    key={g.id}
                />
            ))}
            
        </MainContainer>
    );
};

const mapStoreStateToProps = ({groups}) => {
    return{
        ...groups,
    };
};

export default connect(mapStoreStateToProps)(GroupsList);