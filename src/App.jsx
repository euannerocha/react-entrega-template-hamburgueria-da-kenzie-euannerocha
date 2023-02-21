import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../src/Components/Header'
import Cart from './Components/Cart'
import ProductsList from './Components/ProductsList'
import Api from './Services/Api'
import { AppStyled } from './Components/AppStyled/appStyled'


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
    <AppStyled>
      <Header />
      <div className='productsAndCartList'>
        <ProductsList products={products} addCart={addCart} />
        <Cart removeAllProducts={removeAllProducts} removeCartProduct={removeCartProduct} currentCart={currentCart} />
      </div>
    </AppStyled>
  )
}

export default App
