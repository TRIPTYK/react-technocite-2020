import React from 'react'
import PropTypes from 'prop-types'
const Comment = ({ author, message, likes }) => (
  <div>
    <p>{author}</p>
    <p>{message}</p>
    <p>{likes > 0 ? likes : 'no'}</p>
  </div>
)

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string,
  likes: PropTypes.number,
}

export default Comment
