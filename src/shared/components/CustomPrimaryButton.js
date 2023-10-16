import React from 'react';
import Button from '@mui/material/Button';
import '../components/CustomPrimaryButton.css'

const CustomPrimaryButton = ({/* Parametros que vamos a recibir */
    label, 
    additionalStyles, 
    disabled, 
    onClick,
}) => {
    return <Button  /* Viene  de material ui */
    variant='contained' /* Checar en la documentación las variantes */
    sx={{ /* Estilos del botón */
        bgcolor:'#47C0A7',
        color:"white",
        textTransform:'none',
        borderRadius:'60px',
        fontSize:"16px",
        fontWeight:500,
        width:"100%",
        height:"40px",
    }}
    style={additionalStyles?additionalStyles:{}} /* Si hay additional styles los aplicamos */
    disabled={disabled} /* Indicamos que estará desactivado */
    onClick={onClick} /* Función que hará cuando le piquemos */
    
    >
        {label}
    </Button>
};

export default CustomPrimaryButton;