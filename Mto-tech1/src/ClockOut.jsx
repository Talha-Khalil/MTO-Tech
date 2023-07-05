import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ClockOut() {
  const [selfie, setSelfie] = useState(null);
  const history = useHistory();

  const handleCaptureSelfie = (event) => {
    const file = event.target.files[0];
    setSelfie(file);
  };

  const handleClockOut = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Clock Out</h1>
      <input type="file" accept="image/*" onChange={handleCaptureSelfie} />
      <button disabled={!selfie} onClick={handleClockOut}>
        Clock Out
      </button>
    </div>
  );
}

export default ClockOut;
