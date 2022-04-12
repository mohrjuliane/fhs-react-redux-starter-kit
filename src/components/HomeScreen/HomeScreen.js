import React from 'react'
import { Button } from '../Button/Button'
import styles from './HomeScreen.module.css'
import { Navigate } from 'react-router-dom'
import { deleteUser } from 'firebase/auth'

export const HomeScreen = ({ user }) => {
  function deleteAccount () {
    deleteUser(user).then(() => { return <Navigate to="/sign-in"></Navigate> })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome on your Money Organizer! </h1>
      {user && <Button onClick={deleteAccount}>Delete account</Button>}
    </div>
  )
}
