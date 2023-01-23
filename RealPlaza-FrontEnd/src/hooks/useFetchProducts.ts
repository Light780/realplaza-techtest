import { useContext, useEffect, useState } from 'react'
import { getProducts } from '../configs/api/product'
import { RealPlazaContext } from '../context'

export const useFetchProducts = (): [boolean] => {
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

  return [reset]
}
