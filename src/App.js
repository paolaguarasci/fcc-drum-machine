import './App.css';

import s1 from './assets/sounds/drum/80s-Bdrum1.wav';
import s10 from './assets/sounds/drum/80s-CRASH2.wav';
import s11 from './assets/sounds/drum/80s-LOWCONGA.wav';
import s12 from './assets/sounds/drum/80s-TOM3.wav';
import s13 from './assets/sounds/drum/80s-CRASH3.wav';
import s14 from './assets/sounds/drum/80s-MIDCONGA.wav';
import s15 from './assets/sounds/drum/80s-TOM5.wav';
import s16 from './assets/sounds/drum/80s-HHCLOSE1.wav';
import s17 from './assets/sounds/drum/80s-SNARE1.wav';
import s2 from './assets/sounds/drum/80s-HHCLOSE2.wav';
import s3 from './assets/sounds/drum/80s-TAMB1.wav';
import s4 from './assets/sounds/drum/80s-COWBELL1.wav';
import s5 from './assets/sounds/drum/80s-HHOPEN2.wav';
import s6 from './assets/sounds/drum/80s-TOM1.wav';
import s7 from './assets/sounds/drum/80s-CRASH1.wav';
import s8 from './assets/sounds/drum/80s-HICONGA.wav';
import s9 from './assets/sounds/drum/80s-TOM2.wav';
import useSound from 'use-sound'

function Button(props) {

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
  }

  const [playSound] = useSound(mapperSound[props.name])

  return (
    <div className='b-instrument' onClick={() => playSound()}>
      <p>{props.name.toUpperCase()}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className='pad'>
        <div className="intruments">
          <Button name="q"/> 
          <Button name="w"/> 
          <Button name="e"/>
          <Button name="a"/> 
          <Button name="s"/> 
          <Button name="d"/>
          <Button name="z"/> 
          <Button name="x"/> 
          <Button name="c"/>
        </div>
        <div className='settings'>

        </div>
      </div>
    </div>
  );
}

export default App;
