import React, { useReducer } from 'react'

const Counter = () => {
  const [result, dispatch] = useReducer((prevState, action) => {
    console.log(prevState, action)
    return prevState + action
  }, 0)

  return (
    <div>
      <button
        type="button"
        className="border rounded shadow p-2 m-2 bg-cool-gray-500 text-white hover:bg-white hover:text-cool-gray-500"
        onClick={() => dispatch(1)}
      >
        Increment
      </button>
      <p>{result}</p>
      <button
        type="button"
        className="border rounded shadow p-2 m-2 bg-cool-gray-500 text-white hover:bg-white hover:text-cool-gray-500"
        onClick={() => dispatch(-1)}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
