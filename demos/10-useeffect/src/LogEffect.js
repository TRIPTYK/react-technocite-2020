import React, { useEffect, useState } from 'react'

const LogEffect = () => {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  useEffect(() => {
    console.log('latest value', text)
  })
  return (
    <div>
      <input
        className="border"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="border"
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
    </div>
  )
}

export default LogEffect
