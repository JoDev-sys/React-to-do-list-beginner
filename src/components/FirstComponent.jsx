import React from 'react'

// props destructuring
//passing setter function as props to child component
export const FirstComponent = ({data, fn}) => {
  return (
      <div>
          <h1>{data}</h1>
          <button onClick={() => fn(10)}>Set 10</button>
      </div>
  )
}
