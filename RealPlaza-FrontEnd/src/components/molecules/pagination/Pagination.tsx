import { FC } from 'react'
import { PaginationButton } from '../../atoms'
import styles from './Pagination.module.css'

export interface PaginationProps {
  nextPage?: string
  previousPage?: string
  totalPages: number
  pageNumber: number
  onClick: Function
  onNextPage: Function
  onPreviosPage: Function

}

export const Pagination: FC<PaginationProps> = ({ nextPage, previousPage, totalPages, pageNumber, onNextPage, onPreviosPage, onClick }) => {
  const pages: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div aria-label='pagination' className={styles['pagination-container']}>
      <>
        <PaginationButton disabled={previousPage === undefined} onClick={onPreviosPage}>&lt;</PaginationButton>
        {
          pages.map(index => {
            return (
              <PaginationButton key={index} active={pageNumber === index} onClick={() => onClick(index)}>
                {index}
              </PaginationButton>
            )
          })
        }
        <PaginationButton disabled={nextPage === undefined} onClick={onNextPage}>&gt;</PaginationButton>
      </>
    </div>
  )
}
