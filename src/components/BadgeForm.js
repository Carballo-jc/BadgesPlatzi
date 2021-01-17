import React, { useState } from "react";

const BadgeForm = () => {
  const initialState = {
    firstName: "",
    jobTitle: "",
    email: "",
    twitter: "",
  };
  const [state, setstate] = useState(initialState);

  const handleInputChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1>New Attendant</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            className={"form-control"}
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={state.firstName}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            className={"form-control"}
            type="text"
            name="jobTitle"
            onChange={handleInputChange}
            value={state.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className={"form-control"}
            type="email"
            name="email"
            onChange={handleInputChange}
            value={state.email}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            className={"form-control"}
            type="text"
            name="twitter"
            onChange={handleInputChange}
            value={state.twitter}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
