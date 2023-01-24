import { FC, ReactNode, useReducer } from 'react'
import { RealPlazaContext } from './RealPlazaContext'
import { initialState, productReducer } from './reducers'

export interface RealPlazaProviderProps {
  children: ReactNode
}

export const RealPlazaProvider: FC<RealPlazaProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)
  return (
    <RealPlazaContext.Provider value={{ state, dispatch }}>
      {children}
    </RealPlazaContext.Provider>
  )
}
