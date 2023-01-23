import { createContext, Dispatch } from 'react'
import { initialState, ProductState } from './reducers'

export const RealPlazaContext = createContext<{
  state: ProductState
  dispatch: Dispatch<any>
}>({ state: initialState, dispatch: () => null })
