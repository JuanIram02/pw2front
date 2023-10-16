import React from 'react';
import {styled} from "@mui/system";

const Wrapper=styled("div")({/* Div que contendrá el label y el input */
    display:'flex',
    justifyContent:'center',
    flexDirection:"column",
    wodth:'100%',
    marginTop:"5px",
})

const Label=styled("p")({/* Label */
    color:'#293D4A',
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'16px',
    margin:"5px",
})

const Input = styled("input")({ /* Input */
    flexGrow:1,
    height:'40px',
    border:'1px solid #6692AD',
    borderRadius:'60px',
    color:'#293D4A',
    background:'rgba(255,255,255,20%)',
    margin:"5px",
    fontSize:'16px',
    paddingLeft:'15px',
})

const InputWithLabel = (props) => {
    const {value, setValue, label, type, placeholder}=props; //info que obtendremos de props
    const handleValueChange=(event)=>{//Seteamos el valor que se ingresó cada que haya un cambio en el input
        setValue(event.target.value);
    };
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                value={value}
                onChange={handleValueChange}
                type={type}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};

export default InputWithLabel;