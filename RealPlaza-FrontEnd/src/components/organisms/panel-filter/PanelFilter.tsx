import { FC } from 'react'
import { useFilterProducts } from '../../../hooks/useFilterProducts'
import { MultiRangeSlider } from '../../atoms'
import { Filter, FilterHeading } from '../../molecules'
import styles from './PanelFilter.module.css'
interface PanelFilterProps {
  reset: boolean
}
export const PanelFilter: FC<PanelFilterProps> = ({ reset }) => {
  const { min, max, onRangeChange, totalRecords } = useFilterProducts(reset)
  return (
    <div className={styles.panel}>
      <FilterHeading totalRecords={totalRecords} />
      <Filter text='Gama de Precios'>
        <MultiRangeSlider min={min} max={max} symbol='S/. ' onChange={onRangeChange} />
      </Filter>
    </div>
  )
}
