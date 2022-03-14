import React from 'react'
import styles from './InputField.module.css'

export const InputField = ({ type, name, title, onChange }) => (
    <label>
            <p className={styles.lableText}>{title}</p>
            <input className={styles.inputfield} type={type} name={name} onChange={onChange} />
    </label>
)
