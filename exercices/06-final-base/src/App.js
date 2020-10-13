import React, { createContext, useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
// eslint-disable-next-line import/no-cycle
import ItemsPage from './ItemsPage'
import CartPage from './CartPage'
import cartReducer from './CartReducer'
import Nav from './Nav'
export const StoreContext = createContext()
const App = () => {
  const getItems = async () => {
    const items = await (await fetch('http://localhost:3000/items')).json()
    setItems(items)
  }
  useEffect(() => {
    getItems()
    return () => {}
  }, [])
  const [items, setItems] = useState([])
  const [cart, dispatchToCart] = useReducer(cartReducer, [])
  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Base TPK APP
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg">
              <Nav />
              <StoreContext.Provider value={{ items, cart, dispatchToCart }}>
                <Router>
                  <ItemsPage path="/" />
                  <CartPage path="/cart" />
                </Router>
              </StoreContext.Provider>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
