import { ReactNode, FC } from 'react'
import styles from './Span.module.css'

interface SpanProps {
  children: ReactNode
  soft?: boolean
}

export const Span: FC<SpanProps> = ({ children, soft = false }) => {
  return (
    <span className={soft ? styles.softSpan : styles.span}>{children}</span>
  )
}
