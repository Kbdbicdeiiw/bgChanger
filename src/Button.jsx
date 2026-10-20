import React, { useState } from 'react'

const Button = ({color}) => {
let [colour, setColour] = useState("olive")

  return (
    <div>
      <button onClick={() => setColour(color)} className='px-4 py-1 rounded-full text-black' style={{backgroundColor: colour}}>{color}</button>
    </div>
  )
}

export default Button
