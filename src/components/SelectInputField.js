
import React from 'react'
import styles from './SelectInputField.module.css'

export const SelectInputField = ({ name, options, onChange, value }) => {
  return (
    <label>
      <p className={styles.lableText}>{name}</p>
      <select
        name={name}
        id={name}
        className={styles.selectContainer}
        onChange={onChange}
        value={value}
        defaultValue={'Select'}
      >
        <option value="Select" disabled={true}>
          Select
        </option>
        {options &&
          options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            )
          })}
      </select>
    </label>
  )
}
