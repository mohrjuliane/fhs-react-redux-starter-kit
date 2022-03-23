import React from 'react'
import { TableRow } from './TableRow'

export const MoneyTransactionList = ({ moneyTransactions, users }) => {
  // pretending to be Sepp (id: 1)
  return (
    <>
      {moneyTransactions.map((element) => {
        return (
          <TableRow
            key={element.id}
            userName={
              element.creditorId !== 1
                ? `I owe ${users.find((x) => x.id === element.creditorId).name}`
                : `${users.find((x) => x.id === element.debitorId).name} owes me`
            }
            id={element.id}
            isPaid={element.paidAt != null}
            amount={element.amount}
          />
        )
      })}
    </>
  )
}
