import React, { useState } from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from './DecimalInput'
import { useFormik } from 'formik'
const data = require('../db.json')

export const MoneyTransactionCreate = () => {
  const [isCreditor, setCreditor] = useState(false) // default: I owe somebody

  const formik = useFormik({
    initialValues: data.user[0],
    onSubmit: (values) => {
      // pretending to be Sepp (id: 1)
      isCreditor
        ? console.log({
          creditorId: 1,
          debitorId: parseInt(values.user),
          amount: values.amount
        })
        : console.log({
          creditorId: parseInt(values.user),
          debitorId: 1,
          amount: values.amount
        })
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
            options={data.user.filter(element => element.id !== 1) /* pretending to be Sepp (id: 1) */}
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
