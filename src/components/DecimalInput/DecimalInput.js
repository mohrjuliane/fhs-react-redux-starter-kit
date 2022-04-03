
import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ name, onChange, value }) => {
  return (
    <label>
      <p className={styles.lableText}>{name}</p>
      <input
        type={'number'}
        id={name}
        min="0.00"
        step="0.1"
        className={styles.decimalField}
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
