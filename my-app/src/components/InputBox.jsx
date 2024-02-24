import { useState } from 'react';



function InputBox() { 
  const [wordInput, setwordInput] = useState(''); 
  const handleinput = (event) => {
    setwordInput(event.target.value); 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      verifyWord(wordInput); 
    }
  };

  function verifyWord(word) {
    
    setwordInput('')

}

  return ( 
    <input type="text" value={wordInput} onChange={handleinput}  onKeyDown={handleKeyDown}  ></input>
  )
}

export default InputBox