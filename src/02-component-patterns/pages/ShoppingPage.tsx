import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr></hr>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            className="bg-dark text-white"
                            product={product}
                            key={product.id}
                            value={shoppingCart[product.id]?.count}
                            onChange={(e) => { onProductCountChange(e) }}
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white text-bold" activeClass="active" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            className="bg-dark text-white"
                            product={product}
                            style={{ width: '100px' }}
                            value={product.count}
                            onChange={(e) => { onProductCountChange(e) }}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
