import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Nashe',
        img: './coffee-mug.png'
    }

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr></hr>
            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle title={''} />
                <ProductButtons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={'Nashe 2'} />
                <ProductCard.Buttons />
            </ProductCard>
        </div>
    )
}
