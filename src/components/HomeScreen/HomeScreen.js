import React from 'react'
import { Button } from '../Button/Button'
import styles from './HomeScreen.module.css'

export const HomeScreen = ({ user }) => {
  function deleteAccount () {
    console.log(user)
  }
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome on your Money Organizer! </h1>
      {user && <Button onClick={deleteAccount}>Delete account</Button>}
    </div>
  )
}
