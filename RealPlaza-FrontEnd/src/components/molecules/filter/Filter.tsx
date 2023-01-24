import { FC, ReactNode } from 'react'
import { Span } from '../../atoms'
import styles from './Filter.module.css'

export interface FilterProps {
  text: string
  children: ReactNode
}

export const Filter: FC<FilterProps> = ({ text, children }) => {
  return (
    <div className={styles.filter}>
      <Span>{text}</Span>
      {children}
    </div>
  )
}
