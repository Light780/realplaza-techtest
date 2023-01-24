import { FC } from 'react'
import { Span } from '../../atoms'
import styles from './FilterHeading.module.css'

export interface FilterHeadingProps {
  totalRecords?: number
}

export const FilterHeading: FC<FilterHeadingProps> = ({ totalRecords }) => {
  return (
    <div className={styles.filterHeading}>
      <Span>Filtros</Span>
      <Span soft>{totalRecords} Resultados Encontrados</Span>
    </div>
  )
}
