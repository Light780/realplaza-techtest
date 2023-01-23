import { FC, useContext, useEffect, useState } from 'react'
import { getProducts } from '../../configs/api/product'
import { RealPlazaContext } from '../../context'
import { Explorer, Navbar, PanelFilter } from '../organisms'
import styles from './Product.module.css'

export const Product: FC = () => {
  const { state, dispatch } = useContext(RealPlazaContext)
  const [reset, setReset] = useState(false)
  const fetchProducts = (): void => {
    getProducts(state.filter, dispatch)
      .then(() => {})
      .catch(() => {})
  }
  useEffect(() => {
    if (state.error != null) {
      alert(JSON.stringify(state.error.errors))
    }
  }, [state.error])

  useEffect(() => {
    if (state.filter.name !== '') {
      fetchProducts()
    }

    if (state.filter.minPrice === 0 || state.filter.maxPrice === 0) { setReset(true) } else { setReset(false) }
  }, [state.filter])

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
