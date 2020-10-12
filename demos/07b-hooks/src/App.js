import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import RandomList from './RandomList'
const App = () => {
  const [count, setCount] = useState(2)
  const [items, setItem] = useState([{ id: 0, value: Math.random() * 100 }])
  const incrementCount = () => {
    // console.log('increment')
    setCount(count + 1)
  }
  const addItem = () => { 
    console.log('addItem')
    setItem([...items, { id: items.length, value: Math.random() * 100 }])
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
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <Counter count={count} incrementCount={incrementCount} />
              <hr />
              <RandomList items={items} addItem={addItem} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
