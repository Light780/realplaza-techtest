import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { IconButton, IconButtonProps } from '../../../src/components/atoms'

describe('<IconButton /> tests', () => {

  const props: IconButtonProps = {
    name:'button',
    onClick: jest.fn(),
    src: '/assets/clearSearch.png'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should fireEvent when click', () => {    
    render(
      <IconButton {...props} />
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalled()
  })

  test('should show img with src', () => {
    render(<IconButton {...props} />)
    const img = screen.getByRole('img')
    expect(img).toBeTruthy()
    expect(img.getAttribute('src')).toBe(props.src)
  })
})
