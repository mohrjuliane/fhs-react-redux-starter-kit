import React from 'react'
import { storiesOf } from '@storybook/react'
import { TableRow } from './TableRow'

storiesOf('TableRow', module)
  .add('primary (default)', () => (
    <TableRow />
  ))
