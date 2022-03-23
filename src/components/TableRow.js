import React, { useState } from 'react'
import styles from './TableRow.module.css'
import { Button } from './Button'

export const TableRow = ({ userName, isPaid, id, amount }) => {
  const [paidState, setPaid] = useState(isPaid)
  const formatAmount = (num) => {
    return num ? `${num.toFixed(2)}$` : ''
  }

  const onMoneyTransactionPaid = (ev) => {
    ev.preventDefault()
    setPaid(true)
    // change data
    console.log({ id: id, paidAt: new Date().toISOString() })
  }

  return (
    <div className={styles.rowWrapper} id={id}>
      <p className={styles.lableText}>{userName}</p>
      <div className={styles.amountWrapper}>
        {paidState
          ? (
          <p className={`${styles.lineThrough} ${styles.lableText}`}>
            {formatAmount(amount)}
          </p>
            )
          : (
          <>
            <p className={styles.lableText}>{formatAmount(amount)}</p>
            <Button isPrimary={true} onClick={onMoneyTransactionPaid}>
              Paid
            </Button>
          </>
            )}
      </div>
    </div>
  )
}
