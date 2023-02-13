import './cartTotal.css'

function CartTotal({ totalValue, removeAllProducts }) {
    return (
        <div className='containerCartTotal'>
            <div className='totalValueAndText'>
                <h1 className='textTotal'>Total</h1>
                <p className='totalValueText'>R$ {totalValue}</p>
            </div>
            <div className='buttonRemoveAllCart'>
                <button className='buttonRemoveAll' onClick={() => removeAllProducts()}>Remover Todos</button>
            </div>
        </div>
    )
}

export default CartTotal