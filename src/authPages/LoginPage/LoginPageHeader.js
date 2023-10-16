import React from 'react';
import { Typography } from '@mui/material';//Responsable for rendering texto

const LoginPageHeader = () => {
    return (
        <>
            <Typography variant='h3' sx={{color:"white", textAlign: 'center', marginBottom:'15px'}}>
                Inciar Sesión
            </Typography>
        </>
    );
};

export default LoginPageHeader;