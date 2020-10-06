import React from 'react'
import PropTypes from 'prop-types'
const Author = ({ name }) => (
  <div>
    <span className="author">{name}</span>
    <span>@{name}sHandle</span>
  </div>
)
Author.propTypes = {
  name: PropTypes.string,
}
export default Author
