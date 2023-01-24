import { render, screen } from "@testing-library/react"
import React from "react"
import { CardWrapper } from "../../../src/components/molecules"
import { ProductDTO } from "../../../src/types/product"

describe('<CardWrapper /> tests', () => {
  const product: ProductDTO = {
    id: '1',
    name: 'Bruno',
    brandName: 'Bruno',
    price: 100,
    discount: 40,
    priceWithDiscount: 60,
    pickupFree: true,
    imageUrl: 'https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-4oqwp5_hb9ime.jpg'
  }
  const data: ProductDTO[] = []
  data.push(product)
  data.push({...product, id: '2'})
  data.push({...product, id: '3'})
  data.push({...product, id: '4'})
  data.push({...product, id: '5'})
  
  test('should show 5 cards', () => {
    render(
      <CardWrapper data={data}/>
    )
    const wrapper = screen.getByLabelText('card-wrapper')
    expect(wrapper.childElementCount).toBe(data.length)
  })
})