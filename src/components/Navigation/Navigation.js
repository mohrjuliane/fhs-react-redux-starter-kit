import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import styles from './Navigation.module.css'
import { auth } from '../../firebase-config'
import { Button } from '../Button/Button'
import { UserContext } from '../../App'

export const Navigation = () => {
  const user = useContext(UserContext)

  async function signOut () {
    try {
      await auth.signOut()
    } catch (error) {
    }
  }

  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>

      {user
        ? (
        <>
          <Link to="/money-transactions">Money-transactions</Link>
          <Button onClick={signOut}>
            Log Out
          </Button>
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
