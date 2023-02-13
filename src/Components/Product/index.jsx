import '../ProductsList/productsList.css'

function Product({ product, addCart }) {
    return (
        <div className='productCart'>
            <div className='imageProductsList'>
                <img className="imageProductsListProduct" src={product.img} />
            </div>
            <div className='titleAndTypeProductsList'>
                <h1 className='nameCartProduct'>{product.name}</h1>
                <p className='categoryCartProduct'>{product.category}</p>
            </div>
            <div className='valueProductsList'>
                <p className='valueProduct'>R${product.price}</p>
            </div>
            <div className='buttonAddProduct'>
                <button className='buttonAdd' onClick={() => addCart(product)}>Adicionar</button>
            </div>
        </div>
    ) 
}

export default Product