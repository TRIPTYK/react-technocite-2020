import React from 'react'
import { UserContext } from './App'
const UserAvatar = () => (
  <div>
    <UserContext.Consumer>
      {(truc) => <img src={truc.avatar} alt="user avatar" />}
    </UserContext.Consumer>
  </div>
)

export default UserAvatar
