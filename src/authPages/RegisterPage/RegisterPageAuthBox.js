import React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/system';
import logo from '../RegisterPage/sign-up.svg'

const BoxWrapper = styled('div')({ //Es el div que va a rodear o contener la caja del login y hará que esté centrado
    width:'100%',
    height: '100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundImage: 'linear-gradient(#179CBC 0%, #FBE4A3 100%)'
})

const Image = styled('img')({
    width:'50%',
    padding:'20px'
})

const AuthBox=(props)=>{
    return(
        <BoxWrapper>
            <Box //viene de material mui
                sx={{/* Styling de la caja */
                    width:400,
                    height:600,
                    bgcolor:'transparent',
                    borderRedius:'5px',
                    display:"flex",
                    flexDirection:"column",
                    padding:"25px",
                }}
            >
                {props.children}  {/* Renderizamos los children de lo que le pasamos dentro de la caja */}              

            </Box>
            <Image src={logo} alt='Login image'></Image>
        </BoxWrapper>
    );
};

export default AuthBox;