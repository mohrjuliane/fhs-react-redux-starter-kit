import React, { useState } from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from './DecimalInput'
import { useFormik } from 'formik'

export const MoneyTransactionCreate = ({ users, setMoneyTransactions }) => {
  const [isCreditor, setCreditor] = useState(false) // default: I owe somebody

  const formik = useFormik({
    initialValues: users[0],
    onSubmit: (values) => {
      // pretending to be Sepp (id: 1)
      const newTransaction = isCreditor
        ? ({
            creditorId: 1,
            debitorId: parseInt(values.user),
            amount: values.amount,
            paidAt: null
          })
        : ({
            creditorId: parseInt(values.user),
            debitorId: 1,
            amount: values.amount,
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
  })

  const toggleCreditorState = (e) => {
    e.preventDefault()
    setCreditor(!isCreditor)
  }

  return (
    <>
      <div className={styles.toggleContainer}>
        <button
          className={
            !isCreditor
              ? `${styles.toggleButton} ${styles.clicked}`
              : `${styles.toggleButton}`
          }
          onClick={toggleCreditorState}
        >
          I owe somebody
        </button>
        <button
          className={
            isCreditor
              ? `${styles.toggleButton} ${styles.clicked}`
              : `${styles.toggleButton}`
          }
          onClick={toggleCreditorState}
        >
          Somebody owes me
        </button>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.transactionForm}>
        <div className={styles.buttonWrapper}>
          <SelectInputField
            name={'user'}
            options={users.filter(element => element.id !== 1) /* pretending to be Sepp (id: 1) */}
            onChange={formik.handleChange}
            value={formik.values.user}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <DecimalInput
            name={'amount'}
            onChange={formik.handleChange}
            value={formik.values.amount}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button isPrimary={true} type="submit">
            Create
          </Button>
        </div>
      </form>
    </>
  )
}
