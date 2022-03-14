import React from 'react'
import styles from './TableRow.module.css'
import { Button } from './Button'

export const TableRow = ({ userName, isPaid, id, amount, setPaid }) => {
  const formatAmount = (num) => {
    return num ? `${num.toFixed(2)}$` : ''
  }

  return (
        <div className={styles.rowWrapper} id={id}>
            <p className={styles.lableText}>{userName}</p>
            <div className={styles.amountWrapper}>
                {isPaid
                  ? <p className={`${styles.lineThrough} ${styles.lableText}`}>{formatAmount(amount)}</p>
                  : <>
                            <p className={styles.lableText}>{formatAmount(amount)}</p>
                            <Button isPrimary={true} onClick={setPaid}>Paid</Button>
                        </>
                }
            </div>
        </div>
  )
}
