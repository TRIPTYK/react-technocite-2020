import React from 'react'
import PropTypes from 'prop-types'

function Counter({ count, incrementCount }) {
  return (
    <div>
      <p>{count}</p>
      <p>
        <button type="button" onClick={incrementCount}>
          Add 1
        </button>
      </p>
    </div>
  )
}

Counter.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
}

export default Counter
