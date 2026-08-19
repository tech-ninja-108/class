import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'

const App = () => {
  const [togle, setTogle] = useState(true)
    const [user, setUser] = useState([])


  return (
    <div>
      {togle ? <Register setTogle={setTogle}  setUser = {setUser}/> : <Login user={user} setTogle={setTogle}/>}
    </div>
  )
}

export default App
