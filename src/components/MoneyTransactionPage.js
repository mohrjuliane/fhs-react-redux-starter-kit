import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'

export const MoneyTransactionPage = () => {
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

  return (
    <>
      <MoneyTransactionCreate
        users={users}
        setMoneyTransactions={setMoneyTransactions}
      />
      <MoneyTransactionList
        moneyTransactions={moneyTransactions}
        users={users}
      />
    </>
  )
}
