import './productsList.css'
import Product from '../Product'

function ProductsList({ products, addCart }) {
    return (
        <div className='productsListContainer'>
            {products.map((product, index) => (
                <Product key={`${index}-${product.name}`} product={product} addCart={addCart} />
            ))}
        </div>
    )
}

export default ProductsList