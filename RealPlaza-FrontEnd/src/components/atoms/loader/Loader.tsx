import { FC } from 'react'
import styles from './Loader.module.css'

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.loader} src='/assets/loader.gif' />
    </div>
  )
}
