import { ReactNode } from 'react'
import { ProductCard } from '../../components/atoms'
import { ProductDTO } from '../../types/product'

export const productCard = (product: ProductDTO): ReactNode => {
  return <ProductCard key={product.name} product={product} />
}
