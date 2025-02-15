
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
        <option value="Select" disabled={true} key={0}>
          Select
        </option>
        {options !== undefined &&
          options.map((option, key) => {
            return (
              <option value={option.id} key={key}>
                {option.name}
              </option>
            )
          })}
      </select>
    </label>
  )
}
