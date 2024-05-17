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

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <InputBox
                    type="text"
                    boxName="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                />
                <InputBox
                    type="text"
                    boxName="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                />
                <InputBox
                    type="email"
                    boxName="Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                <InputBox
                    type="password"
                    boxName="Password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                />
                <InputBox
                    type="password"
                    boxName="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                />
            </form>

                <div className="submitted-data">
                    <h2>Submitted Data:</h2>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>

        </div>
    );
}

export default Form;
