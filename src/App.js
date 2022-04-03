import React, { useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'
import { MoneyTransactionPage } from './components/MoneyTransactionPage/MoneyTransactionPage'

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
        <Route path="/money-transactions" element={<MoneyTransactionPage />} />
      </Routes>
    </Router>
  )
}

export default App
