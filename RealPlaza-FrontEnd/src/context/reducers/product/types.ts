import { PagedResponse, ProductDTO, ProductGetRequest } from '../../../types'
import { BaseState } from '../types'

export interface ProductState extends BaseState {
  filter: ProductGetRequest
  products?: PagedResponse<ProductDTO[]>
  isLoading: boolean
}

export interface ProductAction {
  payload: any
  type: ProductActionType
}

export enum ProductActionType {
  FILTER_CHANGED,
  LOADING,
  LOADED,
  ERROR
}
