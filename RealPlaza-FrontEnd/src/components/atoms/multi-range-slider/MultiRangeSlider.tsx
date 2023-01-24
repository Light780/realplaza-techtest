import { useCallback, useEffect, useState, useRef, FC, ChangeEvent } from 'react'
import classnames from 'classnames'
import styles from './MultiRangeSlider.module.css'

export interface MultiRangeSliderProps {
  min: number
  max: number
  symbol: string
  onChange: Function
}

export const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ max, min, onChange, symbol }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  useEffect(() => {
    if (maxValRef.current != null) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current != null) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect(() => {
    if (minValRef.current != null) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current != null) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(minVal, maxVal)
    }, 900)
    return () => {
      clearTimeout(handler)
    }
  }, [minVal, maxVal])

  useEffect(() => {
    setMaxVal(max)
    setMinVal(min)
  }, [min, max])

  return (
    <div className={styles.container}>
      <input
        type='range'
        aria-label='min'
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.stopPropagation()
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
        }}
        className={classnames(styles.thumb.concat(' ', styles['thumb--zindex-3']), {
          [styles['thumb--zindex-5']]: minVal > max - 100
        })}
      />
      <input
        type='range'
        min={min}
        max={max}
        aria-label='max'
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          event.stopPropagation()
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
        }}
        className={classnames(styles.thumb, { [styles['thumb--zindex-5']]: true })}
      />

      <div className={styles.slider}>
        <div className={styles.slider__track} />
        <div ref={range} className={styles.slider__range} />
        <div className={styles['slider__left-value']}>{symbol}{minVal}</div>
        <div className={styles['slider__right-value']}>{symbol}{maxVal}</div>
      </div>
    </div>
  )
}
