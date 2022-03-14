import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { InputField } from './InputField'
import { Button } from './Button'

export const SignUp = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('email: ' + email + ', password: ' + password)
  }

  return (
      <div className={styles.formularWrapper}>
          <form className={styles.signinformular} onSubmit={handleSubmit}>
            <InputField type="email" name="email" title="Email" onChange={(e) => setEmail(e.target.value)}/>
            <InputField type="password" name="password" title="Password" onChange={(e) => setPassword(e.target.value)}/>
            <Button isPrimary={true}>
                Sign Up
            </Button>
            <Button isPrimary={false}> Sign In </Button>
        </form>
    </div>
  )
}
