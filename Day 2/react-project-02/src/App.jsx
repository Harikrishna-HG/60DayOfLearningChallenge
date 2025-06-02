import React from 'react'
import { useState } from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className='row'>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default App
