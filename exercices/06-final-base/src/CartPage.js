import React from 'react'
// eslint-disable-next-line import/no-cycle
import { StoreContext } from './App'
import { ADDTOCART, REMOVEFROMCART } from './CartReducer'
import Item from './Item'
const CartPage = () => (
  <div>
    <StoreContext.Consumer>
      {({ totalAmount }) => (
        <span className="p-2 text-2xl">Total amount due {totalAmount} €</span>
      )}
    </StoreContext.Consumer>
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <StoreContext.Consumer>
        {({ cart, dispatchToCart }) =>
          cart.map((item) => (
            <Item key={item.id} item={item}>
              <button
                type="button"
                onClick={() => {
                  dispatchToCart({
                    type: REMOVEFROMCART,
                    payload: { item },
                  })
                }}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="pt-3">{item.qt}</span>
              <button
                type="button"
                onClick={() => {
                  dispatchToCart({
                    type: ADDTOCART,
                    payload: { item },
                  })
                }}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Item>
          ))
        }
      </StoreContext.Consumer>
    </ul>
  </div>
)
export default CartPage
