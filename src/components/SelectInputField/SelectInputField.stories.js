import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectInputField } from './SelectInputField'

storiesOf('SelectInputField', module)
  .add('primary (default)', () => (
        <SelectInputField />
  ))
