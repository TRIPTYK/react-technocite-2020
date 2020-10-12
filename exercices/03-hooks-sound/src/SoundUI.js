import React from 'react'

const SoundUI = ({ name, value, onUpdate }) => (
  <div className="m-5 flex">
    <button
      onClick={() => onUpdate(-1)}
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
    >
      -
    </button>
    <div className="text-center px-3">
      <p>{value}</p>
      <p>{name}</p>
    </div>
    <button
      onClick={() => onUpdate(1)}
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
    >
      +
    </button>
  </div>
)

export default SoundUI
