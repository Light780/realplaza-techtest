import { QueryParameters } from './query'

export interface ProductGetRequest extends QueryParameters {
  name: string
  minPrice: number
  maxPrice: number
}

export interface ProductDTO {
  id: string
  name: string
  brandName: string
  price: number
  discount: number
  priceWithDiscount: number
  pickupFree: boolean
  imageUrl: string
}
