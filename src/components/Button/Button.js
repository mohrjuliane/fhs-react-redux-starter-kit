import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children, isPrimary, type }) => {
  console.log(onClick)
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${isPrimary && styles.primary}`}
    >
      {children}
    </button>
  )
}
