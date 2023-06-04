import React, { useState, useEffect } from 'react';

const currentDate = new Date(); // Create a Date object representing the current date and time
const startDate = new Date('2023-07-03T22:00:00');
const endDate = new Date('2023-07-03T23:00:00');

//-----------Styling------------
const boxStyle = {
  width: '200px',
  height: '40px',
  backgroundColor: 'white',
  border: '1px solid black',
  padding: '2px',
};
const progressBarStyle = {
  width: '5%',
  backgroundColor: 'purple',
  height: '39px',
  margin: '0px',
};

// -----------Component-------------
function ProgressBar() {
  const [value, setValue] = useState(0);
  const [timePassed, settimePassed] = useState(0);
  const [lengthOfSession, setLengthOfSession] = useState(0);
  const [percentageOfProgressBar, setPercentageOfProgressBar] = useState(0);

  useEffect(() => {
    setLengthOfSession(Math.floor((endDate.getTime() - startDate.getTime()) /(1000)));
  }, [startDate, endDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timePassedInSeconds = Math.floor((startDate.getTime() - now.getTime())/(1000));
      console.log(`StartDate:${Math.floor(startDate.getTime()/60000)}, now: ${Math.floor(now.getTime()/60000)}`);
      console.log(timePassedInSeconds/60);
      const progressPercentage = ((timePassedInSeconds) / lengthOfSession);
      settimePassed(timePassedInSeconds);
      setPercentageOfProgressBar(progressPercentage);
      setValue(progressPercentage); // Update the value for the progress bar width
    }, 2000);

    return () => clearInterval(interval);
  }, [lengthOfSession]);

  return (
    <div>
      <div className="box" style={boxStyle}>
        <div
          className="progressBar"
          style={{
            ...progressBarStyle,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <p>Length of Session: {lengthOfSession / 60} min</p>
      <p>Time Passed: {timePassed/60} min</p>
      <p>Progress: {percentageOfProgressBar}%</p>
      
    </div>
  );
}

export default ProgressBar;
