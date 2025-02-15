import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import styles from './SignIn.module.css'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Link, Navigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'

const userSchema = object({
  email: string().email('Invalid Email').required('Required'),
  password: string().min(5).required('Required')
})

export const SignIn = ({ user }) => {
  const [loginError, setError] = useState()

  const formik = useFormik({
    initialValues: {},
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleSubmit(values.email, values.password)
    }
  })

  async function handleSubmit (email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  if (user) return <Navigate to="/money-transactions"></Navigate>

  return (
    <div className={styles.formularWrapper}>
      <form className={styles.signinformular} onSubmit={formik.handleSubmit}>
        <InputField
          type="email"
          name="email"
          title="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {<div className={styles.errorMessage}>{formik.errors.email}</div>}
        <InputField
          type="password"
          name="password"
          title="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {<div className={styles.errorMessage}>{formik.errors.password}</div>}
        {<div className={styles.errorMessage}>{loginError}</div>}
        <Button isPrimary={true} type="submit">
          Sign In
        </Button>
        <Link to="/sign-up" className={styles.linkText}>
          Sign Up
        </Link>
      </form>
    </div>
  )
}
