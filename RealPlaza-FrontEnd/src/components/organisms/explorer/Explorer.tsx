import { FC } from 'react'
import { useFilterProducts } from '../../../hooks/useFilterProducts'
import { Loader } from '../../atoms/loader/Loader'
import { CardWrapper, Pagination } from '../../molecules'
import styles from './Explorer.module.css'

export const Explorer: FC = () => {
  const { isLoading, pagedResponse, onNextPage, onPreviousPage, onSelectPage } = useFilterProducts()

  if (isLoading) {
    return <Loader />
  }

  if (pagedResponse?.data === undefined) {
    return <></>
  }

  return (
    <div className={styles.explorer}>
      <CardWrapper data={pagedResponse?.data} />
      <Pagination {...pagedResponse} onNextPage={onNextPage} onPreviosPage={onPreviousPage} onClick={onSelectPage} />
    </div>
  )
}
