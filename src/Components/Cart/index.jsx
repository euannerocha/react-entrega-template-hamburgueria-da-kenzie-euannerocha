// import './cart.css'
import CartProducts from '../CartProducts'
import CartTotal from '../CartTotal'
import { useEffect, useState } from 'react'
import { StyledCart } from './cart'

function Cart({ currentCart, removeCartProduct, removeAllProducts }) {

    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        const total = currentCart.reduce((acc, product) => {
            return acc + product.price
        }, 0)

        setTotalValue(total.toFixed(2))

    }, [currentCart])

    return (
        <StyledCart>
            <div className='cartHeader'>
                <h1 className='cartTitle'>Carrinho de compras</h1>
            </div>
            <div className='cartBody'>
                {currentCart.map((product, index) => {
                    return <CartProducts product={product} removeCartProduct={removeCartProduct} key={`${product.name}-${index}`} />
                })}
            </div>
            <div className='totalValueCart'>
                <CartTotal removeAllProducts={removeAllProducts} totalValue={totalValue} />
            </div>
        </StyledCart>
    )
}

export default Cart