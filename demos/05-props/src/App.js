import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/Child'
import Comment from './components/Comment'
const handleClick = (event) => {
  // eslint-disable-next-line no-console
  console.log('Child did:', event)
}
const App = () => (
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
            {/* <Child name="Gilles" age={45} handleClick={handleClick} /> */}
            <Child name="truc" />
            <Comment author="gilles" message="Faim tres faim" likes={5} />
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
