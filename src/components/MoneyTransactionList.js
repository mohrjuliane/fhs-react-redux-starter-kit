import React from 'react'
import { TableRow } from './TableRow'

export const MoneyTransactionList = () => {
  const moneyTransactions = [
    {
      user: {
        id: 1,
        name: 'Juliane'
      },
      amount: 10.4,
      isPaid: true
    },
    {
      user: {
        id: 2,
        name: 'Claudia'
      },
      amount: 10.4,
      isPaid: false
    },
    {
      user: {
        id: 3,
        name: 'Kerstin'
      },
      amount: 90.0,
      isPaid: false
    }

  ]
  return (
        <>
            {moneyTransactions.map((element) => {
              return (
                    <TableRow key={element.user.id} userName={element.user.name} id={element.user.id} isPaid={element.isPaid} amount={element.amount}/>
              )
            })}
        </>
  )
}
