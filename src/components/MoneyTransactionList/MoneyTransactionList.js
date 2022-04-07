import React from 'react'
import { TableRow } from '../TableRow/TableRow'

export const MoneyTransactionList = ({ moneyTransactions, users, ownId, updateDocument }) => {
  return (
    <>
      {users !== undefined && moneyTransactions.map((element) => {
        return (
          <TableRow
              key={element.id}
              element={element}
              updateDocument={updateDocument}
              userName={element.creditorId !== ownId
                ? `I owe ${users.find((x) => x.id === element.creditorId).name}`
                : `${users.find((x) => x.id === element.debitorId).name} owes me`
              }
              id={element.id}
              isPaid={element.paidAt !== null}
              amount={element.amount}
          />
        )
      })}
    </>
  )
}
