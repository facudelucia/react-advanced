import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

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
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductImage className="custom-image" />
                    <ProductTitle title={''} className="text-white text-bold" activeClass="active" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard className="bg-dark text-white" product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={'Nashe 2'} className="text-white" activeClass="active" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard style={{
                    backgroundColor: '#70D1F8'
                }} product={product}>
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
