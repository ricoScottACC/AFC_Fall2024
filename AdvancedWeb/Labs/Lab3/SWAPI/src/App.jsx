import { useState } from 'react'
import Table from '../components/Table'

function App() {

  return (
    <div>
      <div className="content">
        <h1>SWAPI - The Star Wars API</h1>
        <Table/>
      </div>
      <div className="video-background">
        <video autoPlay muted loop src="src/assets/video.mp4" type="video/mp4"></video>
      </div>
    </div>
  )
}

export default App
