import { ProductState } from './types'

export const initialState: ProductState = {
  filter: {
    name: '',
    minPrice: 0,
    maxPrice: 0,
    pageNumber: 1,
    pageSize: 12
  },
  products: undefined,
  isLoading: false
}
