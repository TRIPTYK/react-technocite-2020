import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number,
  }
  render() {
    return (
      <div>
        <p>State : {this.props.count}</p>
        <p>
          <button
            onClick={this.props.incrementCount}
            className="p-1 border rounded"
            type="button"
          >
            Add 1
          </button>
        </p>
      </div>
    )
  }
}

export default Counter
