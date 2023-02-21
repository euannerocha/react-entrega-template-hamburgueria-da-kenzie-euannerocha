import { ContainerCartTotal } from './cartTotal'

function CartTotal({ totalValue, removeAllProducts }) {
    return (
        <ContainerCartTotal>
            <div className='totalValueAndText'>
                <h1 className='textTotal'>Total</h1>
                <p className='totalValueText'>R$ {totalValue}</p>
            </div>
            <div className='buttonRemoveAllCart'>
                <button className='buttonRemoveAll' onClick={() => removeAllProducts()}>Remover Todos</button>
            </div>
        </ContainerCartTotal>
    )
}

export default CartTotal 