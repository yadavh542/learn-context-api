import React, { useState } from 'react';
import './PhoneNumberInput.css';

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }) => {
  const [isValid, setIsValid] = useState(true);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    setIsValid(phoneRegex.test(inputPhone));
    if (!isValid) {
      setPhoneError('Please enter valid phone number');
    }
    setPhoneNumber(inputPhone);
  };
  return (
    <>
      {/* phone no */}
      <div className="phone-input-container">
        <label className="phone-label" htmlFor="phone">
          Phone Number:
        </label>
        <br />
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Enter Your Phone Number"
          maxLength={10}
          className={`phone-input ${!isValid ? 'invalid' : ''}`}
        />
        {!isValid && <p className="error-message">{phoneError}</p>}
      </div>
    </>
  );
};


export default PhoneNumberInput;