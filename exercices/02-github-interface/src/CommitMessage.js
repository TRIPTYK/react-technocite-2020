import React from 'react'
import PropTypes from 'prop-types'
const CommitMessage = ({ message }) => <span>{message}</span>
CommitMessage.propTypes = {
  message: PropTypes.string,
}
export default CommitMessage
