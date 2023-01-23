import { FC, MouseEvent } from 'react'
import styles from './IconButton.module.css'

interface IconButtonProps {
  name: string
  src: string
  onClick?: Function
}
export const IconButton: FC<IconButtonProps> = ({ name, src, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(e)
  }
  return (
    <button className={styles.button} name={name} onClick={handleClick}>
      <img src={src} className={styles.img} />
    </button>
  )
}
