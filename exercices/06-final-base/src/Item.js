import React from 'react'
import PropTypes from 'prop-types'
const Item = ({ item, children }) => (
  <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
    <div className="flex-1 flex flex-col p-8">
      <img
        className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
        src={item.picture}
        alt=""
      />
      <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">
        {item.title}
      </h3>
      <dl className="mt-1 flex-grow flex flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-gray-500 text-sm leading-5">{item.description}</dd>
        <dt className="sr-only">Role</dt>
      </dl>
    </div>
    <div className="border-t border-gray-200">
      <div className="-mt-px flex">
        <div className="w-0 flex-1 flex border-r border-gray-200">
          <span className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium">
            {item.price} €
          </span>
        </div>
        <div className="-ml-px w-0 flex-1 flex">{children}</div>
      </div>
    </div>
  </li>
)

Item.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
  }),
}

export default Item
