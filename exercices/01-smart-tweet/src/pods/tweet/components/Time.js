import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
const Time = ({ timeStamp }) => (
  <div>
    <span>{moment(timeStamp.toISOString()).fromNow()}</span>
  </div>
)
Time.propTypes = {
  timeStamp: PropTypes.instanceOf(Date),
}
export default Time
