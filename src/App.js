import React, { useState } from 'react'
import { Navigation } from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { MoneyTransactionList } from './components/MoneyTransactionList'

function App () {
  const [user, setUser] = useState({ email: '', password: '' })

  function handleUserChange ({ email, password }) {
    setUser({ email: email, password: password })
  }

  return (
    <Router>
      <Navigation userEmail={user.email} />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/sign-in"
          element={<SignIn user={user} onUpdateUser={handleUserChange} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp user={user} onUpdateUser={handleUserChange} />}
        />
        <Route path="/money-transactions" element={<MoneyTransactionList />} />
      </Routes>
    </Router>
  )
}

export default App
