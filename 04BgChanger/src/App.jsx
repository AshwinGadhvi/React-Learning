import './App.css'
import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive") 
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      setColor(e.target.innerText);
    })
  })

  return (
    <div className='w-full h-screen duration-10' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"gold"}}>Gold</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"silver"}}>Silver</button>
          <button className='outline-none px-4 py-1 rounded text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
