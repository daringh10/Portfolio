import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HomePage } from './Components/HomePage/HomePage'

function App() {

  
  return (
    <div className='bg-black'>
      {/* <div className="py-24 sm:py-32 lg:py-20"> */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <HomePage/>
        </div>
      {/* </div> */}
    </div>
  )
}

export default App
