import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HomePage } from './Components/HomePage/HomePage'

function App() {

  
  return (
    <div className=''>
      {/* <div className="py-24 sm:py-32 lg:py-20"> */}
        <div className="grid place-items-center ">
          <HomePage/>
        </div>
      {/* </div> */}
    </div>
  )
}

export default App
