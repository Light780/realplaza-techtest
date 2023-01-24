import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { PaginationProps, Pagination } from "../../../src/components/molecules"

describe('<Pagination /> tests', () => {
  const props: PaginationProps = {
    nextPage: undefined,
    previousPage: undefined,
    pageNumber: 1,
    totalPages: 10,
    onClick: jest.fn(),
    onNextPage: jest.fn(),
    onPreviosPage: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should show 12 pagination buttons', async () => {
    render(
      <Pagination {...props}/>
    )
    const pagination = screen.getByLabelText('pagination')
    expect(pagination.childElementCount).toBe(props.totalPages + 2)
  })

  test('should show prev and next button disabled', async () => {
    render(
      <Pagination {...props}/>
    )
    const buttons = screen.getAllByRole('button')    
    expect(buttons.filter(btn => btn.getAttribute('disabled') === '').length).toBe(2)
  })

  test('should show prev and next button enabled', async () => {
    props.nextPage = 'https://paginaSiguiente.com'
    props.previousPage = 'https://paginaAnterior.com'
    render(
      <Pagination {...props}/>
    )
    const buttons = screen.getAllByRole('button')    
    expect(buttons.filter(btn => btn.getAttribute('disabled') === '').length).toBe(0)
  })
})