import { Routes, Route } from 'react-router-dom';
import './App.css';
import routes from '../Navigation/route';

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.content} />
      ))}
    </Routes>
  )
}

export default App
