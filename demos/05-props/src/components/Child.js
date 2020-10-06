import React from 'react'
import PropTypes from 'prop-types'
// const localHandleClick = (e) => {
//   e.preventDefault()
// }
const Child = ({ name, age, handleClick }) => (
  <div>
    Hello {name}
    <p>{age < 45 ? 'you are too young for this site' : `welcome ${name}`}</p>
    <div>
      {handleClick && (
        <button
          onClick={handleClick}
          className="border p-2 hover:bg-red-500"
          type="button"
        >
          Click me for interaction
        </button>
      )}
    </div>
  </div>
)

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
}

export default Child
