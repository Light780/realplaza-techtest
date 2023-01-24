import { FC, MouseEvent } from 'react'
import styles from './IconButton.module.css'

export interface IconButtonProps {
  name: string
  src: string
  onClick?: Function
}

export const IconButton: FC<IconButtonProps> = ({ name, src, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(e)
  }
  return (
    <button className={styles.button} aria-label={name} onClick={handleClick}>
      <img src={src} className={styles.img} />
    </button>
  )
}
