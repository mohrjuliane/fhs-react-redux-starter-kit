import React from 'react'
import { TableRow } from './TableRow'
const data = require('../db.json')

export const MoneyTransactionList = () => {
  // wir sind Sepp??
  return (
    <>
      {data['money-transaction'].map((element) => {
        return (
          <TableRow
            key={element.id}
            userName={
              element.creditorId !== 1
                ? data.user.find((x) => x.id === element.creditorId).name
                : data.user.find((x) => x.id === element.debitorId).name
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
