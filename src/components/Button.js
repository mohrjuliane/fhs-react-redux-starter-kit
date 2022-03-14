import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children, isPrimary }) => {
  console.log(onClick)
  return (
  <button onClick={onClick} className={`${styles.button} ${isPrimary && styles.primary}`}>
    {children}
  </button>
  )
}
