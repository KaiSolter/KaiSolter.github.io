import { useState } from 'react';

function InputBox() { 
  const [wordInput, setwordInput] = useState(''); 
  const handleinput = (event) => {
    setwordInput(event.target.value); 
  };
  return ( 
    <input type="text" value={wordInput} onChange={handleinput} ></input>
  )
}

export default InputBox