import React, { useState } from 'react'
import './App.css'
import NewProgressBar from './NewProgressBar'
const sessionStart = new Date('2023-07-05T01:00:00')
const sessionEnd = new Date('2023-07-05T01:59:00')
function App() {
  return (
    <div className="App">
      <NewProgressBar startTime={sessionStart} endTime={sessionEnd} />
      <div>{}</div>
    </div>
  )
}
export default App
