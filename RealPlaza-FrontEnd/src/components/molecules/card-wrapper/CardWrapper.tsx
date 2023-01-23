import { ReactElement, ReactNode } from 'react'
import { isProduct, productCard } from '../../../helpers'
import styles from './CardWrapper.module.css'

interface CardWrapperProps<T> {
  data: T[]
}

export const CardWrapper = <T extends object>({ data }: CardWrapperProps<T>): ReactElement => {
  const cardSwitch = <T extends object>(element: T): ReactNode => {
    if (isProduct(element)) { return productCard(element) }
  }

  return (
    <div className={styles.wrapper}>
      {
        data.map(element => cardSwitch(element))
      }
    </div>
  )
}
