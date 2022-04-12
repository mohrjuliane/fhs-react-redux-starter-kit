import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { InputField } from '../InputField/InputField'
import { Button } from '../Button/Button'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase-config'
import { doc, setDoc } from 'firebase/firestore'
import * as Yup from 'yup'

const userSchema = object({
  email: string().email('Invalid Email').required('Required'),
  password: string().min(5).required('Required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export const SignUp = ({ user, onUpdateUser }) => {
  const [loginError, setError] = useState()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: user,
    validationSchema: userSchema,
    onSubmit: (values) => { handleSubmit(values.name, values.email, values.password) }
  })

  async function handleSubmit (name, email, password) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      const uid = userCredentials.user.uid
      await setDoc(doc(db, 'users', uid), { name: name })
      navigate('/money-transactions')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className={styles.formularWrapper}>
      <form className={styles.signinformular} onSubmit={formik.handleSubmit}>
        <InputField
            type="text"
            name="name"
            title="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
        />
        {<div className={styles.errorMessage}>{formik.errors.name}</div>}
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
        <InputField
            type="password"
            name="passwordConfirmation"
            title="Re-enter password"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
        />
        {<div className={styles.errorMessage}>{formik.errors.passwordConfirmation}</div>}
        {<div className={styles.errorMessage}>{loginError}</div>}
        <Button type="submit" isPrimary={true}>
          Sign Up
        </Button>
        <Link to="/sign-in" className={styles.linkText}>
          Sign In
        </Link>
      </form>
    </div>
  )
}
