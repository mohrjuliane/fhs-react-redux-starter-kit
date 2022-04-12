import React, { useEffect, useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'
import { MoneyTransactionPage } from './components/MoneyTransactionPage/MoneyTransactionPage'
import { auth } from './firebase-config'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { HomeScreen } from './components/HomeScreen/HomeScreen'

function App () {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  return (
    <Router>
      <Navigation user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen user={user}/>} />
        <Route path="/sign-in" element={<SignIn user={user} />} />
        <Route path="/sign-up" element={<SignUp user={user} />} />
        <Route
          path="/money-transactions"
          element={
            <ProtectedRoute user={user}>
              <MoneyTransactionPage user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
