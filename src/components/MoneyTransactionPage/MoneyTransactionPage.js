import React, { useEffect, useState } from 'react'
import { MoneyTransactionCreate } from '../MoneyTransactionCreate/MoneyTransactionCreate'
import { MoneyTransactionList } from '../MoneyTransactionList/MoneyTransactionList'
import { db } from '../../firebase-config'
import { collection, addDoc, updateDoc, doc, getDocs } from 'firebase/firestore'

export const MoneyTransactionPage = () => {
  const [moneyTransactions, setMoneyTransactions] = useState([])
  const [users, setUsers] = useState([{}])
  const [ownId] = useState('7ksRNdhVDN8McZVloTEc')
  const userCollectionRef = collection(db, 'users')
  const transactionCollectionRef = collection(db, 'transactions')

  useEffect(() => {
    updateUsersState()
    updateTransactionsState()
  }, [])

  async function updateUsersState () {
    const data = await getDocs(userCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setUsers(parsedData)
  }

  async function updateTransactionsState () {
    const data = await getDocs(transactionCollectionRef)
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setMoneyTransactions(parsedData)
  }
  async function addMoneyTransaction (creditor, debitor, amount) {
    const newTransaction =
      {
        creditorId: creditor,
        debitorId: debitor,
        amount: amount,
        paidAt: null
      }
    await addDoc(collection(db, 'transactions'), newTransaction)
    updateTransactionsState()
  }

  /* Code von Thomas Mayrhofer
  const addMoneyTransaction = useCallback((moneyTransaction) => {
    setMoneyTransaction([...moneyTransactions, moneyTransaction])
  },[moneyTransactions,setMoneyTransactions]) */

  async function updateDocument (transactionId, time) {
    const documentRef = doc(db, 'transactions', transactionId)
    await updateDoc(documentRef, {
      paidAt: time
    })
  }

  return (
        <>
            <MoneyTransactionCreate users={users} handleSubmit={addMoneyTransaction} ownId={ownId} />
            <MoneyTransactionList moneyTransactions={moneyTransactions} users={users} ownId={ownId} updateDocument={updateDocument}/>
        </>
  )
}
