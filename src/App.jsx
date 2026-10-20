import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
  let [color, setColor] = useState("maroon")

  return (
    
      <div className='w-full h-screen ' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl '>
            <Button color={"red"}/>
            <Button color={"violet"}/>
            <Button color={"blue"}/>
            <Button color={"Indigo"}/>
            <Button color={"Green"}/>
            <Button color={"Yellow"}/>
            <Button color={"Orange"}/>
            <Button color={"Purple"}/>
          </div>
        </div>
      </div>

  )
}

export default App
