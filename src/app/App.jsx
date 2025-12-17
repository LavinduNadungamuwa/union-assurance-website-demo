import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './App.css'
import Button from '../common/component/Button/Button'
import Home from '../pages/Home/Home'
import Page2 from '../pages/Page2/Page2'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Home /> */}
        <Page2 />
      </div>
    </>
  )
}

export default App
