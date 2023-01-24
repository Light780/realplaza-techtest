import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { PaginationButton } from "../../../src/components/atoms"

describe('<PaginationButton /> test', () => {
  test('should show children text ', () => { 
    render(
      <PaginationButton>
        1
      </PaginationButton>
    )
    expect(screen.getByText('1')).toBeTruthy()
  })

  test('should fire onClick', () => {
    const onClick = jest.fn()
    render(
      <PaginationButton onClick={onClick}>
        1
      </PaginationButton>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
  
  test('should be disabled', () => {    
    render(
      <PaginationButton disabled>
        1
      </PaginationButton>
    )
    const button = screen.getByRole('button')       
    expect(button.getAttribute('disabled')).toBe('')
  })

  test('should be active', () => {    
    render(
      <PaginationButton active>
        1
      </PaginationButton>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('active')
  })
})