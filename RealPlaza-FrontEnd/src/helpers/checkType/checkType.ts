import { ProductDTO } from '../../types/product'

export const isProduct = (element: any): element is ProductDTO => {
  return element !== undefined
}
