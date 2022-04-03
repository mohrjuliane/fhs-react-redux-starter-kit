import React, { useState } from 'react'
import { SelectInputField } from '../SelectInputField/SelectInputField'
import { Button } from '../Button/Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from '../DecimalInput/DecimalInput'
import { useFormik } from 'formik'

export const MoneyTransactionCreate = ({ users, handleSubmit }) => {
  const [isCreditor, setCreditor] = useState(false) // default: I owe somebody

  const formik = useFormik({
    initialValues: users[0],
    onSubmit: (values) => {
      // pretending to be Sepp (id: 1)
      const creditor = isCreditor ? 1 : parseInt(values.user)
      const debitor = isCreditor ? parseInt(values.user) : 1
      handleSubmit(creditor, debitor, values.amount)
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
            options={users.filter(element => element.id !== 1)/* pretending to be Sepp (id: 1) */}
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
