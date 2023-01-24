import { ReactElement, ReactNode } from 'react'
import { isProduct } from '../../../helpers'
import { ProductCard } from '../../atoms'
import styles from './CardWrapper.module.css'

export interface CardWrapperProps<T> {
  data?: T[]
}

export const CardWrapper = <T extends object>({ data }: CardWrapperProps<T>): ReactElement => {
  const cardSwitch = <T extends object>(element: T): ReactNode => {
    if (isProduct(element)) { return <ProductCard key={element.id} product={element} /> }
  }

  return (
    <div aria-label='card-wrapper' className={styles.wrapper}>
      {
        data?.map(element => cardSwitch(element))
      }
    </div>
  )
}
