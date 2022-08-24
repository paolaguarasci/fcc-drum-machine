import './App.css';

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
import { useState } from 'react';

function ButtonI(props) {
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

  return (
    <div className="b-instrument" onClick={() => {playSound(); props.setMsg(props.name);}}>
      <p>{props.keyButton.toUpperCase()}</p>
    </div>
  );
}

function DisplayName(props) {
  return (
    <div className='display-name'>
      {props.toDisplay}
    </div>
  );

}

function App() {
  const [selectedMessage,setMessage]=useState('');
  return (
    <div className="App">
      <div className="pad">
        <div className="intruments">
          <ButtonI setMsg={setMessage} keyButton="q" name="Drum" />
          <ButtonI setMsg={setMessage} keyButton="w" name="HHclose" />
          <ButtonI setMsg={setMessage} keyButton="e" name="Tamb" />
          <ButtonI setMsg={setMessage} keyButton="a" name="Cowbell" />
          <ButtonI setMsg={setMessage} keyButton="s" name="HHopen" />
          <ButtonI setMsg={setMessage} keyButton="d" name="Tom 1" />
          <ButtonI setMsg={setMessage} keyButton="z" name="Crash" />
          <ButtonI setMsg={setMessage} keyButton="x" name="Hiconga" />
          <ButtonI setMsg={setMessage} keyButton="c" name="Tom 2" />
        </div>
        <div className="settings">
          <DisplayName toDisplay={selectedMessage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
