import { ReactElement } from 'react'
import { Product } from './components/pages/Product'
import { RealPlazaProvider } from './context'
import './style.css'
export const RealPlazaApp = (): ReactElement => {
  return (
    <RealPlazaProvider>
      <Product />
    </RealPlazaProvider>
  )
}
