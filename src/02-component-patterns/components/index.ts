
import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import { ProductCardHOCProps } from '../interfaces'


export { ProductTitle } from './ProductTitle'
export { ProductImage } from './ProductImage'
export { ProductButtons } from './ProductButtons'


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;