import React, { createContext, useEffect, useState, Suspense } from 'react'
import { Navigation } from './components/Navigation/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase-config'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const UserContext = createContext({})
const SignIn = React.lazy(() => import('./components/SignIn/SignIn'))
const SignUp = React.lazy(() => import('./components/SignUp/SignUp'))
const MoneyTransactionPage = React.lazy(() =>
  import('./components/MoneyTransactionPage/MoneyTransactionPage')
)
const HomeScreen = React.lazy(() =>
  import('./components/HomeScreen/HomeScreen')
)

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
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomeScreen />
              </Suspense>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/money-transactions"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <MoneyTransactionPage />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </Router>
  )
}

export default App
