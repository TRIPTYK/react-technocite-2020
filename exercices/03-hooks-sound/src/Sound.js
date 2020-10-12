import React, { useState } from 'react'
import SoundUI from './SoundUI'

const Sound = () => {
  const [{ volume, bass, middle, trebble }, setValues] = useState({
    volume: 85,
    bass: 50,
    middle: 41,
    trebble: 10,
  })
  const setValue = (key) => (direction) => {
    console.log('setValue', key, direction)
    setValues((state) => ({
      ...state,
      [key]: state[key] + direction,
    }))
  }
  return (
    <div className="bg-white sha sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Manage the sound curves
        </h3>
        <SoundUI name="volume" value={volume} onUpdate={setValue('volume')} />
        <SoundUI name="bass" value={bass} onUpdate={setValue('bass')} />
        <SoundUI name="middle" value={middle} onUpdate={setValue('middle')} />
        <SoundUI
          name="trebble"
          value={trebble}
          onUpdate={setValue('trebble')}
        />
      </div>
    </div>
  )
}

export default Sound
