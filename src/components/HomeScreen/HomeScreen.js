import React from 'react'
import styles from './HomeScreen.module.css'

export const HomeScreen = ({ user }) => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome on your Money Organizer! </h1>
    </div>
  )
}
