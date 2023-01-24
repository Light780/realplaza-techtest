import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import { MultiRangeSlider, MultiRangeSliderProps } from "../../../src/components/atoms"

describe('<MultiRangeSlider /> tests', () => {
  const props: MultiRangeSliderProps = {
    symbol: "S/. ",
    min: 0,
    max: 100,
    onChange: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  test('should fire onChange with 15 and 100', async () => {
    render(
      <MultiRangeSlider {...props} />
    )
    const inputMin = screen.getByRole('slider', {
      name: 'min'
    })

    fireEvent.change(inputMin, {target: {value:15}})

    await waitFor(() => {
      expect(props.onChange).toHaveBeenCalledWith(15, 100)
    })

  })

  test('should show symbol', async () => {
    render(
      <MultiRangeSlider {...props} />
    )
    const inputMin = screen.getByRole('slider', {
      name: 'min'
    })

    fireEvent.change(inputMin, {target: {value:15}})

    await waitFor(() => {
      expect(props.onChange).toHaveBeenCalledWith(15, 100)
    })

  })
})
