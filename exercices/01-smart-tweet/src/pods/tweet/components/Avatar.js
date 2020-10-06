import React from 'react'
import PropTypes from 'prop-types'
// import image from '../../../assets/images/welsh-paysage.jpg'
const Avatar = ({ avatar }) => (
  <img className="avatar" src={avatar} alt="avatar best profile" />
)

Avatar.propTypes = {
  avatar: PropTypes.string,
}

export default Avatar
