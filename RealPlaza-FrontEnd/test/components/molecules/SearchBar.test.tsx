import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { SearchBar, SearchBarProps } from "../../../src/components/molecules"

describe('<SearchBar /> tests', () => {
  const props: SearchBarProps = {
    name:'searchBar',
    onSearch: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should show clear button', async () => {
    render(
      <SearchBar {...props}/>
    )
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target:{value:'Addidas'}})
    await waitFor(() => {
      expect(screen.getByRole('button', {name:'clearButton'})).toBeTruthy()
    })
  })

  test('should show search button', async () => {
    render(
      <SearchBar {...props}/>
    )
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target:{value:'Addidas'}})
    fireEvent.change(input, {target:{value:''}})
    await waitFor(() => {
      expect(screen.getByRole('button', {name:'searchButton'})).toBeTruthy()
    })
  })
})