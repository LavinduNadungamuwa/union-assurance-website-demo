import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './App.css'
import Button from '../common/component/Button/Button'
import Home from '../pages/Home/Home'
import Page2 from '../pages/Page2/Page2'
import Page3 from '../pages/Page3/Page3'
import Page4 from '../pages/Page4/Page4'
import Page5 from '../pages/Page5/Page5'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Home /> */}
        {/* <Page2 /> */}
        {/* <Page3 /> */}
        {/* <Page4 /> */}
        <Page5 />
      </div>
    </>
  )
}

export default App
