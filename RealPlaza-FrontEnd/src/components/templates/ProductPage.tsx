import { FC, Fragment } from 'react'
import { PagedResponse, ProductDTO } from '../../types'
import { Explorer, Navbar, PanelFilter } from '../organisms'

import styles from './ProductPage.module.css'
export const ProductPage: FC = () => {
  const product: ProductDTO = {
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
  data.push(product)
  data.push(product)
  data.push(product)

  const pagedResponse: PagedResponse<ProductDTO[]> = {
    pageNumber: 1,
    totalPages: 4,
    totalRecords: 100,
    pageSize: 10,
    firstPage: '',
    lastPage: '',
    data,
    succeeded: true
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <PanelFilter totalRecords={pagedResponse.totalRecords} />
        <Explorer explorerData={pagedResponse} isLoading />
      </div>
    </>
  )
}
