import { ChangeEvent, useState, FC, KeyboardEvent } from 'react'
import { IconButton, Input } from '../../atoms'
import styles from './SearchBar.module.css'

export interface SearchBarProps {
  name: string
  onSearch: Function
}

export const SearchBar: FC<SearchBarProps> = ({ name, onSearch }) => {
  const [searchText, setSearchText] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value)
  }

  const onClear = (): void => {
    setSearchText('')
  }

  return (
    <div className={styles.searchBar}>
      <Input
        name={name}
        placeholder='¿Qué está buscando?'
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onSearch(e, searchText)}
        value={searchText}
        onInputChange={onInputChange}
      />
      {
        searchText === ''
          ? <IconButton src='/assets/purple-search.png' name='searchButton' />
          : <IconButton src='/assets/clearSearch.png' name='clearButton' onClick={onClear} />
      }

    </div>
  )
}
