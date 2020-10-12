import React, { useRef } from 'react'

const UnControlled = () => {
  const myInput = useRef()
  const showValue = () => {
    console.log(myInput.current.value)
  }
  return (
    <div>
      <label htmlFor="uncontrolled">
        UnControlled Input :
        <input
          className="border rounded"
          type="text"
          name="uncontrolled"
          ref={myInput}
        />
      </label>
      <button
        type="button"
        className="mx-2 p-1 border rounded bg-indigo-500 text-white hover:bg-white hover:text-indigo-500"
        onClick={showValue}
      >
        Alert the value
      </button>
    </div>
  )
}
export default UnControlled
