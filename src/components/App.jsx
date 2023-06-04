import React, { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import GPTprogressBar from './GPTprogressBar'
import GPT2 from './GPT2'
const startDate = new Date('2023-07-03T22:00:00')
const endDate = new Date('2023-07-03T23:00:00')
function App() {
  return (
    <div className="App">
      {/* <ProgressBar  StartTime={''} EndTime={''}/> */}
      {/* <GPTprogressBar startTime={startDate} endTime={endDate}></GPTprogressBar> */}
      <GPTprogressBar
        startTime="2023-07-03T22:00:00"
        endTime="2023-07-03T23:00:00"
      />
      <GPT2  startTime="2023-07-03T22:00:00"
        endTime="2023-07-03T23:00:00"/>
      <div>{}</div>
    </div>
  )
}
export default App
