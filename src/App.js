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
import useSound from 'use-sound';

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

  const [playSound] = useSound(mapperSound[props.keyButton]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {};
  });

  const handleKeyPress = (event) => {
    if (event.key === props.keyButton) {
      handleClick();
    }
  };

  const handleClick = () => {
    if (props.powerState) {
      setActive(true);
      playSound();
      props.setMsg(props.name);
      setTimeout(() => {
        setActive(false);
        props.setMsg('');
      }, 500);
    }
  };

  return (
    <div
      className={isActive ? 'b-instrument-pressed' : 'b-instrument'}
      onClick={handleClick}
    >
      <p>{props.keyButton.toUpperCase()}</p>
    </div>
  );
}

function DisplayName(props) {
  return <div className="display-name">{props.toDisplay}</div>;
}

function ButtonP(props) {
  const handleClick = () => {
    props.setPower(!props.powerState);
  };
  return (
    <div className="powerbutton" onClick={handleClick}>
      Power State: {props.powerState ? 'Ok' : 'No'}
    </div>
  );
}

function App() {
  const [selectedMessage, setMessage] = useState('');
  const [selectedPower, setPower] = useState(true);

  return (
    <div className="App">
      <div className="pad">
        <div className="intruments">
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="q"
            name="Drum"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="w"
            name="HHclose"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="e"
            name="Tamb"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="a"
            name="Cowbell"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="s"
            name="HHopen"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="d"
            name="Tom 1"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="z"
            name="Crash"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="x"
            name="Hiconga"
          />
          <ButtonI
            powerState={selectedPower}
            setMsg={setMessage}
            keyButton="c"
            name="Tom 2"
          />
        </div>
        <div className="settings">
          <ButtonP powerState={selectedPower} setPower={setPower} />
          <DisplayName toDisplay={selectedMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
