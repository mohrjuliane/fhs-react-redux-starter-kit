import React from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from './DecimalInput'
const data = require('../db.json')

export const MoneyTransactionCreate = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.transactionForm}>
      <div className={styles.buttonWrapper}>
        <SelectInputField name={'User'} options={data.user} />
      </div>
      <div className={styles.buttonWrapper}>
        <DecimalInput name={'Amount'} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button isPrimary={true} onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </form>
  )
}
