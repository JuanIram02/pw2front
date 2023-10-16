export const validateLoginForm=({mail,password})=>{

    return mail.length >0 && password.length>0;
}

export const validateRegisterForm=({name, lastname, mail, password})=>{
    return (validateMail(mail)&&validatePassword(password)&&validateName(name)&&validateName(lastname));
}

const validatePassword=(password)=>{
    return password.length>6&&password.length<12;
};

export const validateMail=(mail)=>{
    const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};

export const validateName=(name)=>{
    return name.length >2 && name.length<13;
};

/* const validateParticipants=(participants[])=>{
    return participants.length >1;
}; */