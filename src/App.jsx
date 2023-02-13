import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../src/Components/Header'
import Cart from './Components/Cart'
import ProductsList from './Components/ProductsList'
import Api from './Services/Api'


function App() {
  const [products, setProducts] = useState([])
  const [currentCart, setCurrentCart] = useState([])

  function addCart(product) {
    if (currentCart.includes(product)) {
      console.log('oi')
      toast.error('Este produto já existe no seu carrinho')
    } else {
      setCurrentCart([...currentCart, product])
    }
  }

  function removeCartProduct(product) {
    const newList = currentCart.filter(currentProduct => currentProduct != product)
    setCurrentCart(newList)
  }

  function removeAllProducts() {
    const newListRemovedAll = []
    setCurrentCart(newListRemovedAll)
  }

  useEffect(() => {
    async function apiRequest() {
      const getApi = await Api.get('/products')
        .then(resp => resp.data)
      setProducts(getApi)
    }
    apiRequest()
  }, [])

  return (
    <div className="App">
      <div className='headerApp'>
        <Header />
      </div>
      <div className='productsAndCart'>
        <div className='productsListApp'>
          <ProductsList products={products} addCart={addCart} />
        </div>
        <div className='cartApp'>
          <Cart removeAllProducts={removeAllProducts} removeCartProduct={removeCartProduct} currentCart={currentCart} />
        </div>
      </div>
    </div>
  )
}

export default App
