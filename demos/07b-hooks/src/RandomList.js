import React from 'react'
import PropTypes from 'prop-types'

function RandomList({ items, addItem }) {
  return (
    <div>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

RandomList.propTypes = {
  items: PropTypes.array,
  addItem: PropTypes.func,
}

export default RandomList
