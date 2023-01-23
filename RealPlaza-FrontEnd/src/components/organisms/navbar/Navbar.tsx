import { FC } from 'react'
import { useFetchProducts } from '../../../hooks/useFetchProducts'
import { useFilterProducts } from '../../../hooks/useFilterProducts'
import { useScreenWidth } from '../../../hooks/useScreenWidth'
import { Logo, LogoMobile } from '../../atoms'
import { SearchBar } from '../../molecules'
import styles from './Navbar.module.css'

export const Navbar: FC = () => {
  const { onSearch } = useFilterProducts()
  const [width] = useScreenWidth()
  const isMobile = width < 528

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
