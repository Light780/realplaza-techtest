import { render, screen } from "@testing-library/react"
import React from "react"
import { ProductCard, ProductCardProps } from "../../../src/components/atoms"

describe('<ProductCard /> tests', () => {
  const props: ProductCardProps = {
    product: {
      id: '1',
      name: 'Bruno',
      brandName: 'Bruno',
      price: 100,
      discount: 40,
      priceWithDiscount: 60,
      pickupFree: true,
      imageUrl: 'https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-4oqwp5_hb9ime.jpg'
    }
  }
  
  test('should show product img and pickup free image', () => {     
    render(
      <ProductCard {...props}/>
    )
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(2)
    expect(imgs[0].getAttribute('src')).toBe(props.product.imageUrl)
    expect(imgs[1].getAttribute('src')).toBe('/assets/pickupfree.png')
  })

  test('should not show pickup free image', () => {
    props.product.pickupFree = false     
    render(
      <ProductCard {...props}/>
    )
    const img = screen.getAllByRole('img')
    expect(img.length).toBe(1)
  })
})