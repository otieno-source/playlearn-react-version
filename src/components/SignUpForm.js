import React from "react";
import { useState } from "react";
import "./StyleSignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    subject: "",
    fee: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submitting formdata");
  };
  return (
    <div className="signupContainer">
      <div className="image">
        <img src="/standingtutor.jpg" alt="Teacher signing" />
      </div>
      <div className="formPlaceholder">
        <h3>SignUp & Earn</h3>
        <form onSubmit={handleSubmit} className="signUpForm">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="fee">Fee/Hr</label>
          <input
            id="fee"
            name="fee"
            type="number"
            value={formData.fee}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
