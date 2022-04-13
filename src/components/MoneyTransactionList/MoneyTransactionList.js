import React, { useCallback } from 'react'
import { TableRow } from '../TableRow/TableRow'

const DEFAULT_USERS = []
const DEFAULT_TRANSACTIONS = []

export const MoneyTransactionList = ({ moneyTransactions = DEFAULT_TRANSACTIONS, users = DEFAULT_USERS, ownId, updateDocument }) => {
  const findNameById = useCallback((id) => {
    const user = users.find((x) => x.id === id)
    if (user !== undefined) {
      return user.name
    } else {
      return '<deleted user>'
    }
  }, [users])

  return (
    <>
      {users !== undefined && moneyTransactions.map((element, key) => {
        return (
          <TableRow
              key={key}
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
