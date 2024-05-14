// src/App.js
import { useState } from 'react';
import AdvancedPhotoSlider from './components/AdvancedPhotoSlider';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import photo1 from './assets/databases.jpeg';
import photo2 from './assets/ethernet.jpeg';
import photo3 from './assets/router.jpeg';
import photo4 from './assets/supercomputers.jpeg';

const images = [
 photo1,
 photo2,
 photo3,
 photo4,
];

function App() {
  const [effect, setEffect] = useState('slide');

  const handleChange = (event) => {
    setEffect(event.target.value);
  };

  return (
    <div className="App">
      
      <FormControl variant="outlined" style={{ marginBottom: '20px' }}>
        <InputLabel id="effect-select-label">Effect</InputLabel>
        <Select
          labelId="effect-select-label"
          id="effect-select"
          value={effect}
          onChange={handleChange}
          label="Effect"
        >
          <MenuItem value="slide">Slide</MenuItem>
          <MenuItem value="fade">Fade</MenuItem>
          <MenuItem value="cube">Cube</MenuItem>
          <MenuItem value="flip">Flip</MenuItem>
          <MenuItem value="coverflow">Coverflow</MenuItem>
        </Select>
      </FormControl>
      <AdvancedPhotoSlider images={images} effect={effect} />
    </div>
  );
}

export default App;
