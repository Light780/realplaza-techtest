import { FC, KeyboardEvent, useContext } from 'react'
import { RealPlazaContext } from '../../../context'
import { ProductAction, ProductActionType } from '../../../context/reducers'
import { useScreenWidth } from '../../../hooks/useScreenWidth'
import { Logo, LogoMobile } from '../../atoms'
import { SearchBar } from '../../molecules'
import styles from './Navbar.module.css'

export const Navbar: FC = () => {
  const { state, dispatch } = useContext(RealPlazaContext)
  const [width] = useScreenWidth()
  const isMobile = width < 528

  const onSearch = (e: KeyboardEvent<HTMLInputElement>, searchText: string): void => {
    if (e.key !== 'Enter') return
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload: {
        filter: {
          ...state.filter,
          name: searchText,
          minPrice: 0,
          maxPrice: 0
        }
      }
    }
    dispatch(action)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {
          isMobile
            ? <LogoMobile />
            : <Logo />
        }
      </div>
      <SearchBar name='searchBar' onSearch={onSearch} />
    </div>
  )
}
