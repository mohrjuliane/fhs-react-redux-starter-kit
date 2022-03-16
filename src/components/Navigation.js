import { Link } from 'react-router-dom'
import React from 'react'
import styles from './Navigation.module.css'

export const Navigation = ({ userEmail }) => {
  return (
    <nav className={styles.navigation}>
      {userEmail}
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/money-transactions">Money-transactions</Link>
    </nav>
  )
}
