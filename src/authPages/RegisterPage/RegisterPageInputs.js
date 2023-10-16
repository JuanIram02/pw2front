import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {
    const{name, setName, lastname, setLastname, mail, setMail, password, setPassword}=props;
  
    return (
        <>
            <InputWithLabel
            value={name}
            setValue={setName}
            label="Nombre"
            type="text"
            placeholder=""
            />

            <InputWithLabel
            value={lastname}
            setValue={setLastname}
            label="Apellido"
            type="text"
            placeholder=""
            />

            <InputWithLabel
            value={mail}
            setValue={setMail}
            label="Correo Electrónico"
            type="text"
            placeholder=""
            />

            <InputWithLabel
            value={password}
            setValue={setPassword}
            label="Contraseña"
            type="password"
            placeholder=""
            />

        </>
    );
};

export default RegisterPageInputs;