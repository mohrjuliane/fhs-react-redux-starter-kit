import React, { useState } from 'react'
import { Button } from './Button'
import { InputField } from './InputField'
import styles from './SignIn.module.css'

export const SignIn = () => {
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
                Sign In
            </Button>
            <Button isPrimary={false}> Sign Up </ Button>
        </form>
    </div>
  )
}
