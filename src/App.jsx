import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './assets/body'
import './assets/style.css'
import Education from './assets/education/index'
import Hobby from './assets/hobby/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <Body />
     <Education />
     <Hobby />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
