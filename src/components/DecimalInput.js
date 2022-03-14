
import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ name }) => {
  return (
        <label>
            <p className={styles.lableText}>{name}</p>
            <input type={'number'}
                   id={name}
                   min="0.00"
                   step="0.001"
                   max="1.00"
                   className={styles.decimalField}
            />
        </label>
  )
}
