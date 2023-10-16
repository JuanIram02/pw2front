import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

const getFormNotValidMessage =()=>{
    return 'Username sholud contain bettween 3 and 12 characters and password should contain between 6 and 12 characters. Also correct e-mail address should provided';
}

const getFormValidMessage=()=>{
    return 'Press to register!';
}

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
    
    const navigate= useNavigate();

    const handlerPushToLoginPage=()=>{
        navigate("/login");
    };
    
    return (
        <>
        <Tooltip
        title={!isFormValid?getFormNotValidMessage():getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton
                    label="Registrarse"
                    additionalStyles={{marginTop:"30px"}}
                    disabled={!isFormValid}
                    onClick={handleRegister}
                />
            </div>
        </Tooltip>
            <RedirectInfo
                text='¿Ya tienes una cuenta? '
                redirectText="Inicia Sesión"
                additionalStyles={{marginTop:"5px"}}
                redirectHandler={handlerPushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;