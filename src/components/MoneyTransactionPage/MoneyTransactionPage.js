import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from '../MoneyTransactionCreate/MoneyTransactionCreate'
import { MoneyTransactionList } from '../MoneyTransactionList/MoneyTransactionList'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export const MoneyTransactionPage = () => {
  const [moneyTransactions, setMoneyTransactions] = useState([])
  const [users, setUsers] = useState([{}])
  // const [ownId] = useState('7ksRNdhVDN8McZVloTEc')
  const userCollectionRef = collection(db, 'users')
  const transactionCollectionRef = collection(db, 'transactions')

  useEffect(() => {
    getUsers()
    getTransactions()
  }, [])

  async function getUsers () {
    const data = await getDocs(userCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
    setUsers(parsedData)
  }

  async function getTransactions () {
    const data = await getDocs(transactionCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data() }))
    console.log(parsedData)
    setMoneyTransactions(parsedData)
  }

  function handleSubmit (creditor, debitor, amount) {
    /* const newTransaction =
            ({
              creditorId: creditor,
              debitorId: debitor,
              amount: amount,
              paidAt: null
            }) */
  }

  return (
        <>
            <MoneyTransactionCreate users={users} handleSubmit={handleSubmit}/>
            <MoneyTransactionList moneyTransactions={moneyTransactions} users={users}/>
        </>
  )
}
