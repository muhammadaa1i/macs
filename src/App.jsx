import { useState } from 'react'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <button
            onClick={() => setIsOpen(false)}
          >X</button>
          <h3>Тоp 10 cmc pairs</h3>
          <h3>Mene coins</h3>
          <h3>Margin trading x10</h3>
        </div>
      )}

      <button
        onClick={() => setIsOpen(true)}
        className='openBtn'>Open</button>
    </div>
  )
}

export default App