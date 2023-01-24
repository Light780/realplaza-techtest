import { FC, Fragment } from 'react'
import { Explorer, Navbar, PanelFilter } from '../organisms'

import styles from './ProductPage.module.css'
export const ProductPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <PanelFilter reset />
        <Explorer />
      </div>
    </>
  )
}
