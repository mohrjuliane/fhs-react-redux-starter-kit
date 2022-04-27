import React from 'react'
import { TableRow } from '../TableRow/TableRow'

export const MoneyTransactionList = ({ moneyTransactions, users, ownId, updateDocument }) => {
  function findNameById (id) {
    const user = users.find((x) => x.id === id)
    if (user !== undefined) {
      return user.name
    } else {
      return '<deleted user>'
    }
  }
  return (
    <>
      {users !== undefined && moneyTransactions.map((element) => {
        return (
          <TableRow
              key={element.uid}
              element={element}
              updateDocument={updateDocument}
              userName={element.creditorId !== ownId
                ? `I owe ${findNameById(element.creditorId)}`
                : `${findNameById(element.debitorId)} owes me`
              }
          />
        )
      })}
    </>
  )
}
