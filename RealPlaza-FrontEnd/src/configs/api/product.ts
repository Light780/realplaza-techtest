import { ProductAction, ProductActionType } from '../../context/reducers'
import { PagedResponse, ProductDTO, ProductGetRequest } from '../../types'
import { apiInstance } from './axios'

const api = 'product'
export const getProducts = async (request: ProductGetRequest, dispatch: Function): Promise<void> => {
  let action: ProductAction = {
    type: ProductActionType.LOADING,
    payload: {}
  }
  dispatch(action)
  try {
    const { data } = await apiInstance.get<PagedResponse<ProductDTO[]>>(api, {
      params: {
        ...request
      }
    })

    action = {
      type: ProductActionType.LOADED,
      payload: {
        products: data
      }
    }
    dispatch(action)
  } catch (error: any) {
    action = {
      type: ProductActionType.ERROR,
      payload: {
        error: error.response.data
      }
    }
    dispatch(action)
  }
}
