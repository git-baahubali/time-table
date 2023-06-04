import React, { useState, useEffect } from 'react';

const GPTprogressBar = ({ startTime, endTime }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const start = new Date(startTime).getTime();
      const end = new Date(endTime).getTime();

      const elapsed = Math.max(0, now - start);
      const duration = Math.max(1, end - start);
      const progress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(progress);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%`, backgroundColor: 'green' }}>
        <span className="progress-label">{progress}%</span>
      </div>
    </div>
  );
};

export default GPTprogressBar;
