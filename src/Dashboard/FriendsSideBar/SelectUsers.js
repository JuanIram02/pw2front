import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Melany Jimenez',
  'Boing Eguia',
  'Denisse Cardoza',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({users, setSelectedUsers}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setSelectedUsers(
      // On autofill we get a stringified value.
      e.target.value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="select-label">Usuarios</InputLabel>
        <Select
          labelId="select-label"
          id="users-select"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-users" label="Usuarios" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {users.map((user) => (
            <MenuItem
              key={user._id}
              value={user.mail}
              style={getStyles(user.mail, personName, theme)}
            >
              {user.mail}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}