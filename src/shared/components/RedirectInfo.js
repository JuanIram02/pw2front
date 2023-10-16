import React from 'react';
import { Typography } from '@mui/material';
import {styled} from "@mui/system"

const RedirectText=styled('span')({
    color:"#399986",
    fontWeight:500,
    cursor:"pointer",
})

const RedirectInfo = ({//Parametros que vamos a recibir
    text, 
    redirectText, 
    additionalStyles, 
    redirectHandler
}) => {
    return <Typography 
    sx={{color:"#293D4A"}}
    style={additionalStyles?additionalStyles:{}}
    variant="subtitle2"
    >
        {text}{/* Le pasamos el texto */}
        <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>{/*Usamos nuestro redirectText y le pasmaos una función que se ejecutará cuando le den clic*/}
    </Typography>
};

export default RedirectInfo;