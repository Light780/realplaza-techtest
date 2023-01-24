import { ChangeEvent, FC, KeyboardEvent } from 'react'
import styles from './Input.module.css'

export interface InputProps {
  name: string
  placeholder: string
  value: string
  onInputChange?: Function
  onKeyDown?: Function
}

export const Input: FC<InputProps> = ({ name, placeholder, value, onInputChange, onKeyDown }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onInputChange?.(e)
  }
  const handleKeyUp = (e: KeyboardEvent): void => {
    onKeyDown?.(e)
  }
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyUp}
    />
  )
}
