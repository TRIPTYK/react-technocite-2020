import React from 'react'
import PropTypes from 'prop-types'
const Message = ({ message }) => <p className="message">{message}</p>

Message.propTypes = {
  message: PropTypes.string,
}
export default Message
