import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Input, InputProps } from '../../../src/components/atoms'

describe('<Input /> tests', () => {
  const props: InputProps = {
    name: 'input',
    onInputChange: jest.fn(),
    onKeyDown: jest.fn(),
    placeholder:'test placeholder',
    value: 'Hello'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should fire onInputChange y onKeyDown', () => {    
        
    render(
      <Input {...props} />
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: 'Hold the line' }
    })
    expect(props.onInputChange).toHaveBeenCalled()

    fireEvent.keyDown(input, {
      key: 'Enter'
    })
    expect(props.onKeyDown).toHaveBeenCalled()
  })

  test('shoud have "test placeholder" as placeholder', () => {
    render(
      <Input {...props} />
    )
    const input = screen.getByRole('textbox')
    expect(input.getAttribute('placeholder')).toBe(props.placeholder)
  })

  test('shoud have "Hello" as value', () => {
    render(
      <Input {...props} />
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue(props.value)
  })
})
