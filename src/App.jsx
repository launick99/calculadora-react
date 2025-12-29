import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card p-0">
        <div className="card-header">
          <div className="input-group">
            <input type="text" className="form-control" />
            <input type="text" className="form-control w-25" />
          </div>
        </div>
        <div className="card-body"></div>
        <div className="card-footer"></div>
      </div>
    </>
  )
}

export default App
