import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

const getFormNotValidMessage =()=>{ //función para obtener el mensaje de error
    return 'Ingrese correo y contraseña'
}

const getFormValidMessage=()=>{ //función para obtener el mensaje de que todo está bien
    return 'Presiona para iniciar sesión!';
}

const LoginPageFooter = ({handleLogin, isFormValid}) => {
    
    const navigate= useNavigate();

    const handlerPushToRegisterPage=()=>{ //Nos redirige a la página de registro
        navigate("/register");
    };
    
    return (
        <>
        <Tooltip /* Tenemos que meter todo a un div porque tooltip no reconoce custom components como un hijo tiene que ser una etiqueta html */
        title={!isFormValid?getFormNotValidMessage():getFormValidMessage()} //Mostramos un mensaje dependiendo si es válido o no
        >
            <div>{/* Usamos el botón y le pasamos sus datos */}
                <CustomPrimaryButton
                    label="Inicia sesión"
                    additionalStyles={{marginTop:"30px"}}
                    disabled={!isFormValid}
                    onClick={handleLogin}
                />
            </div>
        </Tooltip>
            <RedirectInfo /* Usamos el redirect que creamos y le mandamos los datos que necesita */
                text='¿No tienes una cuenta? '
                redirectText="Crear cuenta"
                additionalStyles={{marginTop:"5px"}}
                redirectHandler={handlerPushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;