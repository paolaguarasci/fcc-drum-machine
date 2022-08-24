import './App.css';

import { useEffect, useState } from 'react';

import s1 from './assets/sounds/drum/80s-Bdrum1.wav';
import s2 from './assets/sounds/drum/80s-HHCLOSE2.wav';
import s3 from './assets/sounds/drum/80s-TAMB1.wav';
import s4 from './assets/sounds/drum/80s-COWBELL1.wav';
import s5 from './assets/sounds/drum/80s-HHOPEN2.wav';
import s6 from './assets/sounds/drum/80s-TOM1.wav';
import s7 from './assets/sounds/drum/80s-CRASH1.wav';
import s8 from './assets/sounds/drum/80s-HICONGA.wav';
import s9 from './assets/sounds/drum/80s-TOM2.wav';

function ButtonI(props) {
  const [isActive, setActive] = useState(false);
  const mapperSound = {
    q: s1,
    w: s2,
    e: s3,
    a: s4,
    s: s5,
    d: s6,
    z: s7,
    x: s8,
    c: s9
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {};
  }, []);

  const handleKeyPress = (event) => {
    if (
      event.key == props.keyButton ||
      event.key == props.keyButton.toUpperCase()
    ) {
      handleClick();
      props.setKey('');
    }
  };

  const handleClick = () => {
    if (props.powerState) {
      setActive(true);

      let a = document.querySelector(`audio#${props.keyButton.toUpperCase()}`);
      a.play();

      props.setMsg(props.name);
      setTimeout(() => {
        setActive(false);
        props.setMsg('');
      }, 500);
    }
  };

  return (
    <div
      id={props.keyButton.toUpperCase()}
      className={
        isActive ? 'b-instrument-pressed drum-pad' : 'b-instrument drum-pad'
      }
      onClick={handleClick}
    >
      <p>{props.keyButton.toUpperCase()}</p>
      <audio
        id={props.keyButton.toUpperCase()}
        className="clip"
        src={mapperSound[props.keyButton]}
      ></audio>
    </div>
  );
}

function DisplayName(props) {
  return (
    <div className="display-name" id="display">
      {props.toDisplay}
    </div>
  );
}

function ButtonP(props) {
  const handleClick = () => {
    props.setPower(!props.powerState);
    setMsgStatus();
  };

  const setMsgStatus = () => {
    // leggermente contro intuitivo!
    props.setMessage('Power ' + (!props.powerState ? 'ON' : 'OFF'));
    setTimeout(() => {
      props.setMessage('');
    }, 1000);
  };

  return (
    <div className="powerbutton">
      <h3>Power</h3>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={props.powerState}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

function VolumeSlider(props) {
  const handleChange = (e) => {
    props.setVolume(e.target.value);
    props.setMessage('Volume Set ' + e.target.value);

    setTimeout(() => {
      props.setMessage('');
    }, 1000);
  };

  return (
    <div className="volume-slider">
      <h3>Volume</h3>
      <input
        type="range"
        min="1"
        max="100"
        value={props.volume}
        id="myRange"
        onChange={handleChange}
      />
    </div>
  );
}

function App() {
  const [selectedKey, setKey] = useState('');
  const [selectedMessage, setMessage] = useState('');
  const [selectedPower, setPower] = useState(true);
  const [selectedVolume, setVolume] = useState(45);

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyPress);
  //   return () => {};
  // }, []);

  const handleKeyPress = (event) => {
    setKey(event.key);
  };

  return (
    <div className="App">
      <div className="pad" id="drum-machine">
        <div className="intruments">
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="q"
            name="Drum"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="w"
            name="HHclose"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="e"
            name="Tamb"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="a"
            name="Cowbell"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="s"
            name="HHopen"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="d"
            name="Tom 1"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="z"
            name="Crash"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="x"
            name="Hiconga"
            selectedKey={selectedKey}
            setKey={setKey}
          />
          <ButtonI
            volume={selectedVolume}
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="c"
            name="Tom 2"
            selectedKey={selectedKey}
            setKey={setKey}
          />
        </div>
        <div className="settings">
          <ButtonP
            powerState={selectedPower}
            setPower={setPower}
            setMessage={setMessage}
          />
          <DisplayName toDisplay={selectedMessage} />
          <VolumeSlider
            volume={selectedVolume}
            setVolume={setVolume}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
