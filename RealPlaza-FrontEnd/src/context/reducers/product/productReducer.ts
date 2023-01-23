import { ProductAction, ProductActionType, ProductState } from './types'

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionType.LOADING:
      return { ...state, isLoading: true }
    case ProductActionType.LOADED:
      return { ...state, products: action.payload.products, isLoading: false }
    case ProductActionType.ERROR:
      return { ...state, products: undefined, isLoading: false, error: action.payload.error }
    case ProductActionType.FILTER_CHANGED:
      return { ...state, filter: action.payload.filter }
    default:
      return { ...state }
  }
}
