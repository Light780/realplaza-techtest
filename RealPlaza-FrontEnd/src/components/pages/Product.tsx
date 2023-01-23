import { FC } from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { Explorer, Navbar, PanelFilter } from '../organisms'
import styles from './Product.module.css'

export const Product: FC = () => {
  const [reset] = useFetchProducts()

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <PanelFilter reset={reset} />
        <Explorer />
      </div>
    </>
  )
}
