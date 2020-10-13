import React from 'react'
import { UserContext } from './App'
const SideBar = () => (
  <div>
    <UserContext.Consumer>{(user) => user.name}</UserContext.Consumer>
  </div>
)

export default SideBar
