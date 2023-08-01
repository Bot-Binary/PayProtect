// src/App.js
import React, { useState } from 'react';
import Signup from './Signup';
import OtpVerification from './OtpVerification';

const App = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <div>
      {!otpSent ? <Signup setOtpSent={setOtpSent} setPhone={setPhone}/> : <OtpVerification phone={phone}/>}
    </div>
  );
};

export default App;
