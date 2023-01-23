import { useEffect, useState } from 'react'

export const useScreenWidth = (): [number] => {
  const [width, setWindowWidth] = useState(0)
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () =>
      window.removeEventListener('resize', updateDimensions)
  }, [])

  const updateDimensions = (): void => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  return [width]
}
