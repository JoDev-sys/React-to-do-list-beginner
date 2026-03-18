import React, { useState } from 'react'

const App = () => {

  const [click, setClick] = useState(0);

  const btnClick = () => {
    setClick(click+1);
  }

  const subBtnClick = () => {
    setClick(click-1);
  }

  return (
    <div>
      <h1>{click}</h1>
      <button onClick={btnClick}>click + 1</button>
      <br />
      <button onClick={subBtnClick} style={{ marginTop: '20px' }}>click - 1</button>
    </div>
  )
 }
export default App
