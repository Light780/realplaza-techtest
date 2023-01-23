import { FC, useContext, useEffect, useState } from 'react'
import { RealPlazaContext } from '../../../context'
import { ProductAction, ProductActionType } from '../../../context/reducers'
import { MultiRangeSlider } from '../../atoms'
import { Filter, FilterHeading } from '../../molecules'
import styles from './PanelFilter.module.css'
interface PanelFilterProps {
  reset: boolean
}
export const PanelFilter: FC<PanelFilterProps> = ({ reset }) => {
  const { state, dispatch } = useContext(RealPlazaContext)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

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

  const onRangeChanged = (minPrice: number, maxPrice: number): void => {
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

  return (
    <div className={styles.panel}>
      <FilterHeading totalRecords={state.products?.totalRecords} />
      <Filter text='Gama de Precios'>
        <MultiRangeSlider min={min} max={max} symbol='S/. ' onChange={onRangeChanged} />
      </Filter>
    </div>
  )
}
