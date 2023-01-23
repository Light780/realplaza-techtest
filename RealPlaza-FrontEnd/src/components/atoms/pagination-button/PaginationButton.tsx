import { FC, MouseEvent, ReactNode } from 'react'
import styles from './PaginationButton.module.css'
import classnames from 'classnames'
interface PaginationButtonProps {
  active?: boolean
  disabled?: boolean
  children: ReactNode
  onClick?: Function
}
export const PaginationButton: FC<PaginationButtonProps> = ({ children, onClick, active = false, disabled = false }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(e)
  }
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classnames(styles.paginationButton, {
        [styles.active]: active
      })}
    >
      {children}
    </button>
  )
}
