import { Link } from 'react-router-dom'
import React from 'react'
import styles from './Navigation.module.css'
import { auth } from '../../firebase-config'

export const Navigation = ({ user }) => {
  async function signOut () {
    try {
      await auth.signOut()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>

      {user
        ? (
        <>
          <Link to="/money-transactions">Money-transactions</Link>
          <button onClick={signOut} className={styles.button}>
            Log Out
          </button>
        </>
          )
        : (
        <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </>
          )}
    </nav>
  )
}
