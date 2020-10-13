import React, { useReducer, useRef } from 'react'
const ADD = 'ADD'
const REMOVE = 'REMOVE'
const RESET = 'RESET'
const ShoppingList = () => {
  const itemInput = useRef('')
  const itemsReducer = (state, action) => {
    switch (action.type) {
      case ADD:
        // ... is the spread function that will make an array or an object flat
        itemInput.current.value = ''
        itemInput.current.focus()
        return [...state, { id: Math.random(), name: action.name }]
      case REMOVE:
        return state.filter((item) => action.id !== item.id)
      case RESET:
        itemInput.current.focus()
        return []
      default:
        return state
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ADD, name: itemInput.current.value })
  }
  const [items, dispatch] = useReducer(itemsReducer, [{ id: 1, name: 'test' }])

  return (
    <div>
      <form>
        <input className="border" type="text" ref={itemInput} />
        <button
          onClick={handleSubmit}
          type="submit"
          className="border bg-green-400 text-white"
        >
          Add Item
        </button>
        <button
          type="button"
          className="border bg-green-400 text-white"
          onClick={() => dispatch({ type: RESET })}
        >
          Reset List
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button
              type="button"
              onClick={() => dispatch({ type: REMOVE, id: item.id })}
              className="p-1 m-1 border border-red-400"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
