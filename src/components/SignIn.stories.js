import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignIn } from './SignIn'

storiesOf('SignIn', module)
  .add('primary (default)', () => (
    <SignIn />
  ))
