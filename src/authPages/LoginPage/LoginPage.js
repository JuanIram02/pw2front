import React, {useState, useEffect} from "react";
import AuthBox from '../../authPages/LoginPage/LoginAuthBox'; //Importamos el AuthBox
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm } from "../../shared/utils/validators";
import {connect} from "react-redux";
import {getActions} from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage=({login})=>{
    const navigate= useNavigate();
    const [mail, setMail]=useState("");/*Nos permite manejar el estado en el componente si cualquier cambio sucede en useState el conponente será rerenderizado dependiendo de los valor d email t setMail*/
    const [password, setPassword]=useState("");
    const [isFormValid, setIsFormValid]= useState(false); /* Indicamos que al inicio el form no será válido */

    useEffect(()=>{
        setIsFormValid(validateLoginForm({mail,password}));/* Aquí veremos si es válido o no */
    },[mail,password,setIsFormValid]);/* Queremos ejecutarla si el mail o la contraseña cambian */

const handleLogin=()=>{ 
    const userDetails={
        mail,
        password
    };
    login(userDetails,navigate);
};
/* Montramos la caja y todo lo que pongamos dentro de esa etiqueta irá dentro de ella */
    return( <AuthBox> 
        <LoginPageHeader/>
        <LoginPageInputs /* Mandamos los datos a los inputs */
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        />
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/> {/* Ponemos el footer y le pasamos su datos */}
    </AuthBox>
    );
};

const mapActionsToProps=(dispatch)=>{
    return{
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps) (LoginPage);

