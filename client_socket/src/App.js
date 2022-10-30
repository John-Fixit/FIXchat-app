import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Chat />}/>
      </Routes>
  )
}

export default App