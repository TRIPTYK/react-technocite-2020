import React, { useState } from 'react'

const PizzaOrder = () => {
  const [{ size, topping, isFreeGluten, instructions }, setOrder] = useState({
    size: '0',
    topping: '0',
    isFreeGluten: false,
    instructions: 'crispy paste',
  })
  const submitOrder = (e) => {
    e.preventDefault()
    // console.log(e)
    console.log(size, topping, isFreeGluten, instructions)
  }

  const resetForm = (e) => {
    e.preventDefault()
    setOrder({
      size: '0',
      topping: '0',
      isFreeGluten: false,
      instructions: '',
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'isFreeGluten') {
      let valueBoolean = false
      if (value === 'false') {
        valueBoolean = false
      } else {
        valueBoolean = true
      }
      valueBoolean = !valueBoolean
      setOrder((prevOrder) => ({
        ...prevOrder,
        isFreeGluten: valueBoolean,
      }))
    } else {
      setOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }))
    }
  }
  return (
    <form className="ml-2" onSubmit={submitOrder}>
      <h3 className="text-lg leading-6 font-medium text-gray-900 ">
        Pizza order form
      </h3>
      <fieldset className="mt-6 flex items-center">
        <legend className="text-base font-medium text-gray-900">Size</legend>
        <div className="mx-2">
          <input
            type="radio"
            className="form-radio h4 w-4 text-indigo-600"
            name="size"
            value="0"
            checked={size === '0'}
            onChange={handleChange}
          />
          <label htmlFor="size" className="ml-3">
            small
          </label>
        </div>
        <div className="mx-2">
          <input
            type="radio"
            className="form-radio h4 w-4 text-indigo-600"
            name="size"
            value="1"
            checked={size === '1'}
            onChange={handleChange}
          />
          <label htmlFor="size" className="ml-3">
            medium
          </label>
        </div>
        <div className="mx-2">
          <input
            type="radio"
            className="form-radio h4 w-4 text-indigo-600"
            name="size"
            value="2"
            checked={size === '2'}
            onChange={handleChange}
          />
          <label htmlFor="size" className="ml-3">
            large
          </label>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <div className="flex">
          <label htmlFor="topping" className="ml-3">
            Topping :
          </label>
          <select
            name="topping"
            className="form-select block leading-4 ml-2"
            value={topping}
            onChange={handleChange}
          >
            <option value="0">Pepperoni</option>
            <option value="1">Ognons</option>
            <option value="2">Olive</option>
          </select>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <div className="flex">
          <input
            name="isFreeGluten"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 leading-5"
            checked={isFreeGluten}
            value={isFreeGluten}
            onChange={handleChange}
          />
          <label htmlFor="free-gluten" className="ml-3 leading-6">
            Glutten free :
          </label>
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <div className="flex">
          <label htmlFor="instructions" className="ml-3 leading-6">
            Special instructions :
          </label>
          <textarea
            name="instructions"
            rows="3"
            className="form-textarea ml-2 text-indigo-600 leading-5"
            value={instructions}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <fieldset className="mt-6">
        <div className="flex">
          <button
            className="p-1 m-1 border rounded text-indigo-800 bg-orange-300 hover:bg-indigo-800 hover:text-orange-300"
            type="submit"
          >
            Order
          </button>
          <button
            className="p-1 m-1 border rounded text-indigo-800 bg-orange-300 hover:bg-indigo-800 hover:text-orange-300"
            type="button"
            onClick={resetForm}
          >
            reset
          </button>
        </div>
      </fieldset>
    </form>
  )
}
export default PizzaOrder
