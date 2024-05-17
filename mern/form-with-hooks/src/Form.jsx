// Form.js
import React, { useState } from "react";
import InputBox from "./InputBox";
import './Form.css';

function Form(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name, value) => {
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
 
    if (name === "firstName" || name === "lastName") {
      setValidation({
        ...validation,
        [name]: value.length >= 2 ? "" : "This field must be at least 2 characters long",
      });
    } else if (name === "email") {
      setValidation({
        ...validation,
        [name]: value.length >= 5 ? "" : "Email must be at least 5 characters long",
      });
    } else if (name === "password" || name === "confirmPassword") {
      const passwordValid = updatedFormData.password.length >= 8;
      const passwordsMatch = updatedFormData.password === updatedFormData.confirmPassword;
  
      setValidation({
        ...validation,
        password: passwordValid ? "" : "Password must be at least 8 characters long",
        confirmPassword: passwordsMatch ? "" : "Passwords do not match",
      });
    }
  };
  
  return (
    <div className="form-container">
      <form>
        <InputBox
          type="text"
          boxName="First Name"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          validation={validation.firstName}
        />
        <InputBox
          type="text"
          boxName="Last Name"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          validation={validation.lastName}
        />
        <InputBox
          type="email"
          boxName="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          validation={validation.email}
        />
      </form>
    <input type="submit" className="submit-button"/>
    </div>
  );
}

export default Form;
