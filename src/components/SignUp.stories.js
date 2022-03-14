import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignUp } from './SignUp'

storiesOf('SignUp', module)
  .add('primary (default)', () => (
    <SignUp />
  ))
