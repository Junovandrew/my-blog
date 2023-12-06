import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Account, Login} from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login/*" element={<Login/>}/>
            <Route path="/account/*" element={<Account/>}/>
            <Route path="/*" element={<div>Sorry\Page not found</div>}/>
        </Routes>
    </>
  )
}

export default App
