import React, { useState } from "react";
import Grid from "../features/projects/grid/Grid";
import Flex from "../features/projects/flexbox/Flex";
import Animation from "../features/projects/animation/Animation";
import CommonInput from "../features/projects/common-input/CommonInput";
import FormExample from "../components/form/FormExample";

const Home = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState({ username: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center',marginTop:'20px'}}>
      <FormExample/>
    </div>
  );
};

export default Home;
