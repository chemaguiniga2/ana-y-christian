import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const AttendanceSelection = () => {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    window.open(`https://wa.me/525629855824?text=Hola%20Me%20gustaria%20confimar%20mi%20asistencia%20a%20tu%20boda.Quiero%20confirmar%20${newAlignment}%20asistente(s).`, "_blank");
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{ alignSelf: 'center' }}
    >
      <ToggleButton value="1" aria-label="left aligned">
        1
      </ToggleButton>
      <ToggleButton value="2" aria-label="centered">
        2
      </ToggleButton>
      <ToggleButton value="3" aria-label="right aligned">
        3
      </ToggleButton>
      <ToggleButton value="4" aria-label="justified">
        4
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
