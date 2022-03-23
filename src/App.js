import React, { useEffect, useState } from 'react'
import { Navigation } from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { MoneyTransactionList } from './components/MoneyTransactionList'
import { MoneyTransactionCreate } from './components/MoneyTransactionCreate'

function App () {
  const [user, setUser] = useState({ email: '', password: '' })
  const [moneyTransactions, setMoneyTransactions] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setMoneyTransactions(json))
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

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
        <Route path="/money-transactions" element={
        <>
          <MoneyTransactionCreate users={users} setMoneyTransactions={setMoneyTransactions}/>
          <MoneyTransactionList moneyTransactions={moneyTransactions} users={users}/>
        </>} />
      </Routes>
    </Router>
  )
}

export default App
