import { CSSProperties, useContext } from "react"
import { ProductCardContext } from "./ProductCard"
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
    img?: string | undefined;
    className?: string;
    style?: CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {

    const { product } = useContext(ProductCardContext)

    let imageToShow: string

    if (img) {
        imageToShow = img
    } else if (product.img) {
        imageToShow = product.img
    } else {
        imageToShow = noImage
    }

    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imageToShow} alt="" />
    )
}