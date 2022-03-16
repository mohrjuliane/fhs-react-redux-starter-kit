import React from 'react'
import styles from './SignUp.module.css'
import { InputField } from './InputField'
import { Button } from './Button'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Link } from 'react-router-dom'

const userSchema = object({
  email: string().email('Invalid Email').required('Required'),
  password: string().min(5).required('Required')
})

export const SignUp = ({ user, onUpdateUser }) => {
  const formik = useFormik({
    initialValues: user,
    validationSchema: userSchema,
    onSubmit: (values) => {
      onUpdateUser({ email: values.email, password: values.password })
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
