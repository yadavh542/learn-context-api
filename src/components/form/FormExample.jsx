import React, { useState } from 'react';
import "./FormExample.css";
import CommonInput from '../../features/projects/common-input/CommonInput';

const FormExample = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    }

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:'100%'}}>
      <CommonInput
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Enter your username"
        errorMessage={errors.username}
      />
      <CommonInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
        errorMessage={errors.email}
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default FormExample;
