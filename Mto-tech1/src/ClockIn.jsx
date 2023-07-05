import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ClockIn() {
  const [selfie, setSelfie] = useState(null);
  const history = useHistory();

  const handleCaptureSelfie = (event) => {
    const file = event.target.files[0];
    setSelfie(file);
  };

  const handleClockIn = () => {
    // Perform clock-in logic here, e.g., API call to record clock-in time and selfie

    // Redirect to clock-out page on successful clock-in
    history.push('/clock-out');
  };

  return (
    <div>
      <h1>Clock In</h1>
      <input type="file" accept="image/*" onChange={handleCaptureSelfie} />
      <button disabled={!selfie} onClick={handleClockIn}>
        Clock In
      </button>
    </div>
  );
}

export default ClockIn;
