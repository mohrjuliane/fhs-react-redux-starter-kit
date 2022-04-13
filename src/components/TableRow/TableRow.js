import React, { useState, useCallback } from 'react'
import styles from './TableRow.module.css'
import { Button } from '../Button/Button'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

export const TableRow = ({ userName, element, updateDocument }) => {
  const [paidState, setPaid] = useState(element.paidAt !== null)

  const formatAmount = useCallback(() =>
    element.amount ? `${element.amount.toFixed(2)}$` : ''
  , [element])

  async function getIsPaid () {
    const docRef = doc(db, 'transactions', element.uid)
    const docSnap = await getDoc(docRef)
    return docSnap.data().paidAt
  }

  const onMoneyTransactionPaid = (ev) => {
    ev.preventDefault()
    updateDocument(element.id, new Date().toISOString())
    if (getIsPaid() !== null) {
      setPaid(true)
    }
  }
  return (
    <div className={styles.rowWrapper} id={element.id}>
      <p className={styles.lableText}>{userName}</p>
      <div className={styles.amountWrapper}>
        {paidState
          ? (
          <p className={`${styles.lineThrough} ${styles.lableText}`}>
            {formatAmount(element.amount)}
          </p>
            )
          : (
          <>
            <p className={styles.lableText}>{formatAmount(element.amount)}</p>
            <Button isPrimary={true} onClick={onMoneyTransactionPaid}>
              Paid
            </Button>
          </>
            )}
      </div>
    </div>
  )
}
