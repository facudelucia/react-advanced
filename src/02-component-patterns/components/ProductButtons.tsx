import { CSSProperties, useContext } from "react"
import { ProductCardContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    activeBtnClass?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { counter, increaseBy } = useContext(ProductCardContext)

    return (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            > - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
        </div>
    )
}