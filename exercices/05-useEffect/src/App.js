import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Reddit from './Reddit'
import DynamicReddit from './DynamicReddit'
const App = () => {
  const [searchText, setValue] = useState('react')
  const [subReddit, setSubReddit] = useState(searchText)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubReddit(searchText)
  }
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
            <div className="border-4 border-dashed border-gray-200 rounded-lg ">
              {/* <Reddit /> */}
              <form onSubmit={handleSubmit}>
                <input
                  className="border"
                  value={searchText}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
              <DynamicReddit subreddit={subReddit} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
