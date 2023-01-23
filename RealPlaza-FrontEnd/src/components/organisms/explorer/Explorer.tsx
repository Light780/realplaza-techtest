import { FC, useContext } from 'react'
import { RealPlazaContext } from '../../../context'
import { ProductAction, ProductActionType } from '../../../context/reducers'
import { Loader } from '../../atoms/loader/Loader'
import { CardWrapper, Pagination } from '../../molecules'
import styles from './Explorer.module.css'

export const Explorer: FC = () => {
  const { state, dispatch } = useContext(RealPlazaContext)

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

  const onClick = (index: number): void => {
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

  if (state.isLoading) {
    return <Loader />
  }

  if (state.products === undefined) { return <></> }

  return (
    <div className={styles.explorer}>
      <CardWrapper data={state.products.data} />
      <Pagination {...state.products} onNextPage={onNextPage} onPreviosPage={onPreviousPage} onClick={onClick} />
    </div>
  )
}
