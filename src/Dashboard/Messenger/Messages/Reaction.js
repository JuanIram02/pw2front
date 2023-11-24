import React from 'react';
import {styled} from '@mui/system';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

const Reaction=({reaction, onClick})=>{
    return <>
    {
            (reaction == "") && (
                <Button 
                style={{
                    paddingLeft: 20,
                    width:'1px',
                    height:'1px',
                    borderRadius:'16px',
                    margin:0,
                    padding:0,
                    minWidth:0,
                    color:'White',
                }}
                onClick={onClick}>
                    <AddReactionIcon/>
                </Button>
            )
        }
        {       
            (reaction == "heart") && (
                <Button 
                style={{
                    paddingLeft: 20,
                    width:'1px',
                    height:'1px',
                    borderRadius:'16px',
                    margin:0,
                    padding:0,
                    minWidth:0,
                    color:'Red',
                }}
                onClick={onClick}>
                    <FavoriteIcon/>
                </Button>
            )
        }
    </>
};

export default Reaction;