import React from 'react'
import PropTypes from 'prop-types'
const Todo = ({ todo }) => {
  const { title, completed } = todo
  return (
    <li>
      {title}
      <p>done: {completed ? 'yes' : 'no'}</p>
    </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  }),
}
export default Todo
