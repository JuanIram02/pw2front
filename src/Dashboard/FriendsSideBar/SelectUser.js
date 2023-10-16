import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [usuario, setUsuario] = React.useState('');

  const handleChange = (e) => {
    setUsuario(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop:"15px" }}>
      <FormControl fullWidth>
        <InputLabel id="user-select">Usuario</InputLabel>
        <Select
          labelId="user-select"
          id="users-select"
          value={usuario}
          label="Usuario"
          onChange={handleChange}
        >
          <MenuItem value={"Denisse Cardoza"}>Denisse Cardoza</MenuItem>
          <MenuItem value={"Melany Jimenez"}>Melany Jimenez</MenuItem>
          <MenuItem value={"Boing Eguia"}>Boing Eguia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}