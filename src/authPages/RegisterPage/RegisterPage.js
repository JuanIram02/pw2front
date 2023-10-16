import { Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import AuthBox from '../../authPages/RegisterPage/RegisterPageAuthBox';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';
import { validateRegisterForm } from '../../shared/utils/validators';
import {connect} from "react-redux";
import {getActions} from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const RegisterPage=({register})=>{
    const navigate=useNavigate();

    const [name, setName]=useState("");
    const [lastname, setLastname]=useState("");
    const [mail, setMail]=useState("");
    const [password, setPassword]=useState("");

    const[isFormValid, setIsFormValid]=useState(false);

    const handleRegister=()=>{
       const userDetails={
        name,
        lastname,
        mail,
        password,
       };

       register(userDetails,navigate);
    };

    useEffect(()=>{
        setIsFormValid(validateRegisterForm({name,lastname,mail,password}));
    },[name, lastname, mail, password, setIsFormValid]);

    return <AuthBox>
        <Typography variant='h3'sx={{color:"white", textAlign: 'center', marginBottom:'15px'}}>
            Registrate
        </Typography>
        <RegisterPageInputs
            name={name}
            setName={setName}
            lastname={lastname}
            setLastname={setLastname}
            mail={mail}
            setMail={setMail}
            password={password}
            setPassword={setPassword}
        />
        <RegisterPageFooter
            handleRegister={handleRegister}
            isFormValid={isFormValid}
        />
    </AuthBox>;
}

const mapActionsToProps=(dispatch)=>{
    return{
        ...getActions(dispatch),
    };
};

export default connect(null,mapActionsToProps)(RegisterPage);