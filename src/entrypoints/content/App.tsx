import { useState } from 'react'

export default () => {
  const [count, setCount] = useState(1)
  const increment = () => setCount(count => count + 1)

  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-md">
      <p className="text-xl font-semibold text-gray-800">
        This is React.
        {' '}
        {count}
      </p>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}
