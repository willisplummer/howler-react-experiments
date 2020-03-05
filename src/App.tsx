import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import Slider from '@material-ui/core/Slider'
import './App.css';

function App() {
  const [song] = useState(new Howl({ 
      src: `${process.env.PUBLIC_URL}/SoundHelix-Song-1.mp3`,
      loop: true,
      volume: 0.5,
      preload: true,
      rate: 1.0,
      onloaderror: console.error,
  }))

  useEffect(() => {
    // Update the document title using the browser API
    // rate can be between 0 and 4
    const convertedSliderValue = (sliderValue / 100) * 4

    song.rate(convertedSliderValue)
  });

  const playSound = () => {
    song.play()
  }
  const pauseSound = () => {
    song.pause()
  }

  const [sliderValue, setSliderValue] = useState(25);

  const handleSliderChange = (e: any, v: number | number[]) => {
    const newValue = typeof v === 'number' ? v : 0
    setSliderValue(newValue)
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={playSound}>Play</button>
        <button onClick={pauseSound}>Pause</button>
        <Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
      </header>
    </div>
  );
}

export default App;
