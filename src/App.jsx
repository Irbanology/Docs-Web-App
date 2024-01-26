import React from 'react'
import Background from './componenes/background'
import Foreground from './componenes/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800' >
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App