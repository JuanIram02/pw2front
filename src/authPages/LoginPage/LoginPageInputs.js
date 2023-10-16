import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({mail, setMail, password, setPassword}) => {
      /* Mandamos los inputs que queremos renderizar con sus respectivos valores */
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="Correo Electrónico"
                type="text"
                placeholder=""
            /><br></br>
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

export default LoginPageInputs;