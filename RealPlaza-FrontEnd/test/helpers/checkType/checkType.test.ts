import { ProductDTO } from "../../../src/types/product"
import { isProduct } from '../../../src/helpers'

describe('checkType tests', () => {
  test('should return true if it is ProductDTO', () => {     
    const product: ProductDTO = {
      name: 'Bruno',
      brandName: 'Bruno',
      price: 100,
      discount: 40,
      priceWithDiscount: 60,
      pickupFree: true,
      imageUrl: 'https://res.cloudinary.com/dvofr1kv3/image/upload/v1674252005/wallhaven-4oqwp5_hb9ime.jpg'
    }

    expect(isProduct(product)).toBeTruthy()
  })
  
  test('should return false if it is not ProductDTO', () => { 
    const anyObject: any = {
      age:10,
      dni:11111111111
    }
    expect(isProduct(anyObject)).toBeFalsy()
  })
})