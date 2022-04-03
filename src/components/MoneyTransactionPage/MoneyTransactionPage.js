import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from '../MoneyTransactionCreate/MoneyTransactionCreate'
import { MoneyTransactionList } from '../MoneyTransactionList/MoneyTransactionList'

export const MoneyTransactionPage = () => {
  const [moneyTransactions, setMoneyTransactions] = useState([])
  const [users, setUsers] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((json) => setUsers(json))
    fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setMoneyTransactions(json))
  }, [])

  function handleSubmit (creditor, debitor, amount) {
    fetch('http://localhost:3001/user')
      .then((response) => response.json())
      .then((json) => console.log(json))

    const newTransaction =
            ({
              creditorId: creditor,
              debitorId: debitor,
              amount: amount,
              paidAt: null
            })
    fetch('http://localhost:3001/money-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(json => console.log(json))

    fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setMoneyTransactions(json))
  }

  return (
        <>
            <MoneyTransactionCreate users={users} handleSubmit={handleSubmit}/>
            <MoneyTransactionList moneyTransactions={moneyTransactions} users={users}/>
        </>
  )
}
