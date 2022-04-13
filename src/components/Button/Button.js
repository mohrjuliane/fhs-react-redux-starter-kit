import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children, isPrimary, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${isPrimary ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  )
}
