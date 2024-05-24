import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    phone_no: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!values.name || !values.email || !values.phone_no) {
      alert("Please fill in all required fields, request not fullfill..");
      return;
    }

    fetch("http://localhost:8081/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const data = await res.json();
          const error = new Error(data.error);

          error.response = res;
          throw error;
        }
      })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error submitting the form:", err.message);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add Contact</h2>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              maxLength={10}
              placeholder="Enter your phone number"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, phone_no: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Enter your email"
              className="form-control"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
