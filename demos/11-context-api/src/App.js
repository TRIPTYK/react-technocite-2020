import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import UserAvatar from './UserAvatar'
export const UserContext = createContext()
const App = () => {
  const [user, setUser] = useState({
    avatar: 'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
    name: 'dave',
    followers: 1234,
    following: 123,
  })
  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Base TPK APP
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <UserContext.Provider value={user}>
                <SideBar />
                <UserAvatar />
              </UserContext.Provider>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
