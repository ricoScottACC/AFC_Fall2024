import { useState } from 'react'
import './App.css'

function App() {
  const [days, setDays] = useState(303);

return (
  <div className="App">
    <h1>Birthday Countdown</h1>
    <div className="card">
      <button onClick={() => setDays(days => days - 1)}>
        Days remaining: {days}</button>
    </div>
  </div>
)

}

export default App
