
import Product from '../Product'
import { ProductsListContainer } from './productsList'

function ProductsList({ products, addCart }) {
    return (
        <ProductsListContainer>
            {products.map((product, index) => (
                <Product key={`${index}-${product.name}`} product={product} addCart={addCart} />
            ))}
        </ProductsListContainer>
    ) 
}

export default ProductsList