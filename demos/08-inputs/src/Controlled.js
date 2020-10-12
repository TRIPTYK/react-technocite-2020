import React, { useState } from 'react'

const Controlled = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    const text = event.target.value;
    setText(text.replace(/[a-z,A-Z]/g,''))
    // setText(event.target.value.toUpperCase())
  }
  return (
    <div>
      <label htmlFor="controlled">
        Controlled Input :
        <input
          className="border rounded"
          type="text"
          name="controlled"
          value={text}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default Controlled
