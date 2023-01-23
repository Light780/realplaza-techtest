import React, { FC } from 'react'
import { ProductDTO } from '../../../types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: ProductDTO
}
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img className={styles.productImg} src={product.imageUrl} alt={product.name} />
      {
        product.pickupFree && <img className={styles.pickupFreeImg} src='/assets/pickupfree.png' />
      }
      <div className={styles.container}>
        <p>{product.brandName.toUpperCase()}</p>
        <h4>{product.name}</h4>
        {
          product.discount > 0
            ? (
              <div>
                <h5 className={styles.oldPrice}>S/. {product.price.toFixed(2)}</h5>
                <div className={styles.priceDiscount}>
                  <h3 className={styles.currentPrice}>S/. {product.priceWithDiscount.toFixed(2)}</h3>
                  <h3 className={styles.discount}> - {product.discount} %</h3>
                </div>
              </div>
              )
            : <h3 className={styles.currentPrice}>S/. {product.price.toFixed(2)}</h3>
        }
      </div>
    </div>
  )
}
