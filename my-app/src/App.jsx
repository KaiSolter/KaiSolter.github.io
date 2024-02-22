import './App.css';
import { useState } from 'react';

function getrandomLetter() { 
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  let num = Math.floor(Math.random() *26 );
  return letters[num];
}

function InputBox() { 
  const [wordInput, setwordInput] = useState(''); 
  const handleinput = (event) => {
    setwordInput(event.target.value); 
  };
  return ( 
    <input type="text" value={wordInput} onChange={handleinput} ></input>
  )
}

function App() {
  return (
    <header>
      <p> Enter Word: </p>
      <InputBox></InputBox>
      <div>
      {getrandomLetter()}
      </div> 
    </header>
  );
}

export default App;
