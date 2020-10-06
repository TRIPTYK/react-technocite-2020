import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
const Time = ({ updateAt }) => (
  <span className="text-orange-500 text-sm">{moment(updateAt).fromNow()}</span>
)

Time.propTypes = {
  updateAt: PropTypes.string,
}
export default Time
