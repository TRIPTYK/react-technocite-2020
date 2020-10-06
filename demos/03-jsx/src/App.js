import React from 'react'
import ReactDOM from 'react-dom'
function SubmitButton() {
  const buttonLabel = 'Submit  dfsdf'
  return (
    <button className="p-2 border hover:bg-red-500" type="button">
      {buttonLabel}
    </button>
  )
}

function TapABeer() {
  return (
    <div>
      <div>Give me a beer</div>
      <div>Or a vodka</div>
    </div>
  )
}

function ValidIndicator() {
  const isValid = false
  return <span>{isValid ? 'valid' : 'isNotValid'}</span>
}
const App = () => (
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
            <SubmitButton />
            <TapABeer />
            <ValidIndicator />
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
