import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './App.css'
import Button from '../common/component/Button/Button'
import Home from '../pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  )
}

export default App
