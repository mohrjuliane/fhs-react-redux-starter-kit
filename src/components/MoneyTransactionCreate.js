import React from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from './DecimalInput'

export const MoneyTransactionCreate = () => {
  const users = [
    { id: '1', name: 'Claudia' },
    { id: '2', name: 'Juliane' },
    { id: '3', name: 'Kerstin' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users)
  }

  return (
        <form onSubmit={handleSubmit} className={styles.transactionForm}>
            <div className={styles.buttonWrapper}>
                <SelectInputField name={'User'} options={users}/>
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
