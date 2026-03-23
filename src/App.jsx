import React, { useRef, useState } from 'react'
import { FirstComponent } from './components/FirstComponent';

const App = () => {

  // useref state hook to make reference to the input element
  // accessing the value of the input element using useref and adding the value to the data array using the spread operator to create a new array with the existing data and the new value from the input element
  const [data, setData] = useState([]);
  const inputRef = useRef(null); 
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter something' />
      <button onClick={() => {setData([...data, inputRef.current.value]);}}>Submit</button>
      {data.map((item, index) => {
        return <h2 key={index}>{item}</h2>
        })}
    </div>
  )
 }
export default App
