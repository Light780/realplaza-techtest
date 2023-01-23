import { KeyboardEvent, useContext, useEffect, useState } from 'react'
import { RealPlazaContext } from '../context'
import { ProductAction, ProductActionType } from '../context/reducers'
import { PagedResponse, ProductDTO } from '../types'

interface UseFilterProducts {
  min: number
  max: number
  totalRecords?: number
  isLoading: boolean
  pagedResponse?: PagedResponse<ProductDTO[]>
  onSearch: Function
  onRangeChange: Function
  onNextPage: Function
  onPreviousPage: Function
  onSelectPage: Function
}

export const useFilterProducts = (reset?: boolean): UseFilterProducts => {
  const { state, dispatch } = useContext(RealPlazaContext)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const onSearch = (e: KeyboardEvent<HTMLInputElement>, searchText: string): void => {
    if (e.key !== 'Enter') return
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          name: searchText,
          minPrice: 0,
          maxPrice: 0
        }
      }
    }
    dispatch(action)
  }

  const onRangeChange = (minPrice: number, maxPrice: number): void => {
    if (minPrice <= 0 || maxPrice <= 0 || (minPrice === min && maxPrice === max)) {
      return
    }

    setMin(minPrice)
    setMax(maxPrice)

    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          minPrice,
          maxPrice
        }
      }
    }

    dispatch(action)
  }

  const onNextPage = (): void => {
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          pageNumber: state.filter.pageNumber + 1
        }
      }
    }
    dispatch(action)
  }

  const onPreviousPage = (): void => {
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          pageNumber: state.filter.pageNumber - 1
        }
      }
    }
    dispatch(action)
  }

  const onSelectPage = (index: number): void => {
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          pageNumber: index
        }
      }
    }
    dispatch(action)
  }

  if (reset != null) {
    useEffect(() => {
      if (state.products?.data != null) {
        if (reset) {
          setMin(state.products.otherFields.minPrice)
          setMax(state.products.otherFields.maxPrice)
        }
      } else {
        setMin(0)
        setMax(0)
      }
    }, [state.isLoading])
  }

  return {
    min,
    max,
    totalRecords: state.products?.totalRecords,
    isLoading: state.isLoading,
    pagedResponse: state.products,
    onSearch,
    onRangeChange,
    onNextPage,
    onPreviousPage,
    onSelectPage
  }
}
