import React, { useState } from 'react'
import { FirstComponent } from './components/FirstComponent';

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
      <button onClick={btnClick}>click + 1</button>
      <br />
      <button onClick={subBtnClick} style={{ marginTop: '20px' }}>click - 1</button>
      <FirstComponent data={click} />
    </div>
  )
 }
export default App
