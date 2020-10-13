/* eslint-disable arrow-body-style */
import React from 'react'
import { Link } from '@reach/router'
const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent
          ? 'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
          : 'whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-green-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-gray-300',
      }
    }}
  />
)
const Nav = () => (
  <div className="sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex">
        <NavLink
          to="/"
          className="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-green-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
        >
          Items
        </NavLink>

        <NavLink
          to="/cart"
          className="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-green-700 hover:border-green-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
        >
          Cart
        </NavLink>
      </nav>
    </div>
  </div>
)

export default Nav
