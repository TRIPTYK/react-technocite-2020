import React from 'react'
// eslint-disable-next-line import/no-cycle
import { StoreContext } from './App'
import { ADDTOCART, ADDTOCARTFROMITEMS } from './CartReducer'
import Item from './Item'

const ItemsPage = () => (
  <div>
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <StoreContext.Consumer>
        {({ items, dispatchToCart }) =>
          items.map((item) => (
            <Item key={item.id} item={item}>
              <button
                type="button"
                onClick={() =>
                  dispatchToCart({
                    type: ADDTOCARTFROMITEMS,
                    payload: { item },
                  })
                }
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span className="ml-3">Add to cart</span>
              </button>
            </Item>
          ))
        }
      </StoreContext.Consumer>
    </ul>
  </div>
)

export default ItemsPage
