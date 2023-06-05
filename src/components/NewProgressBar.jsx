import React, { useState, useEffect } from 'react'

//-----------Styling------------
const boxStyle = {
  width: '200px',
  height: '40px',
  backgroundColor: 'white',
  border: '1px solid black',
  padding: '2px',
}
const progressBarStyle = {
  width: '5%',
  backgroundColor: 'green',
  height: '39px',
  margin: '0px',
  color: '#000000',
}
function NewProgressBar(props) {
  // Since Js doesnt allow proper arothematics of time ,I am using getHours & getMinutes seperatly to perform arithematics on them
  const [value, setValue] = useState(0)
  const [SessionStartHours, SessionStartMinutes, SessionStartSeconds] = [
    props.startTime.getHours(),
    props.startTime.getMinutes(),
    props.startTime.getSeconds(),
  ]
  const [SessionEndHours, SessionEndMinutes, SessionEndSeconds] = [
    props.endTime.getHours(),
    props.endTime.getMinutes(),
    props.endTime.getSeconds(),
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const [nowInHours, nowInMinutes, nowInSeconds] = [
        now.getHours(),
        now.getMinutes(),
        now.getSeconds(),
      ]
    //   if (SessionStartHours <= nowInHours && SessionStartMinutes <= nowInMinutes )

    if(props.startTime.getTime() <= now.getTime() && now.getTime() <=props.endTime.getTime() ) // This line is not working
    
      {
        //Here calculations are done in minutes
        const elapsed =
          (nowInHours - SessionStartHours) * 60 +
          (nowInMinutes - SessionStartMinutes)
        const duration =
          (SessionEndHours - SessionStartHours) * 60 +
          (SessionEndMinutes - SessionStartMinutes)
        const remainingTime = duration - elapsed
        const progressPercentage = (100 * elapsed) / duration
        setValue(Math.floor(progressPercentage))
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [
    SessionStartHours,
    SessionStartMinutes,
    SessionEndHours,
    SessionEndMinutes,
    value,
  ])

  return (
    <div>
      <div className="box" style={boxStyle}>
        <div
          className="progressBar"
          style={{
            ...progressBarStyle,
            width: `${value}%`,
          }}
        >
          {value + '%'}
        </div>
      </div>
    </div>
  )
}

export default NewProgressBar


