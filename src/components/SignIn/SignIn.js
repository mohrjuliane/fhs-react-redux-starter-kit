import React from 'react'
import { Button } from '../Button/Button'
import { InputField } from '../InputField/InputField'
import styles from './SignIn.module.css'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Link } from 'react-router-dom'

const userSchema = object({
  email: string().email('Invalid Email').required('Required'),
  password: string().min(5).required('Required')
})

export const SignIn = ({ user, onUpdateUser }) => {
  const formik = useFormik({
    initialValues: user,
    validationSchema: userSchema,
    onSubmit: (values) => {
      onUpdateUser({ email: values.email, password: values.password })
      console.log({ email: values.email, password: values.password })
    }
  })

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
