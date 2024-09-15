import React from 'react'
import styles from './InputField.module.css'

export const InputField = React.forwardRef((props, ref) => {
  InputField.displayName = 'InputField'
  return (
  <label>
    <p className={styles.lableText}>{props.title}</p>
    <input
      className={styles.inputfield}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      ref={ref}
    />
  </label>
  )
})
