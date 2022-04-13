import React, { createContext, useEffect, useState } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'
import { MoneyTransactionPage } from './components/MoneyTransactionPage/MoneyTransactionPage'
import { auth } from './firebase-config'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { HomeScreen } from './components/HomeScreen/HomeScreen'

export const UserContext = createContext({})

function App () {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  return (
    <Router>
      <UserContext.Provider value={user}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/money-transactions"
            element={
              <ProtectedRoute>
                <MoneyTransactionPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </Router>
  )
}

export default App
