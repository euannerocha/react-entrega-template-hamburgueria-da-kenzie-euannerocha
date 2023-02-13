import './cartProducts.css'

function CartProducts({ product, removeCartProduct }) {
    return (
        <div className='cartProductsContainer'>
            <div className='imageCartProduct'>
                <img className='imgCartProduct' src={product.img} />
            </div>
            <div className='titleAndType'>
                <h1 className='nameCartProduct'>{product.name}</h1>
                <p className='categoryCartProduct'>{product.category}</p>
            </div>
            <div className='buttonRemoveCartProduct'>
                <button className='buttonRemove' onClick={() => removeCartProduct(product)}>Remover</button>
            </div>
        </div>
    )
}

export default CartProducts