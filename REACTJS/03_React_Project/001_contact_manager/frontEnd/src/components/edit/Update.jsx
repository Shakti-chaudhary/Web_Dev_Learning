import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    phone_no: "",
    email: "",
  });

  useEffect(() => {
    fetch("http://localhost:8081/read/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setValues({
            ...values,
            id: id,
            name: data[0].name,
            phone_no: data[0].phone_no,
            email: data[0].email,
          });
        } else {
          console.log("No data found");
        }
      })
      .catch((err) =>
        console.error("Error in catch block of read fetch:", err)
      );
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch("http://localhost:8081/update/" + id, {
      method: "PUT",
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
        console.log(data.message, "Fetch response after post : ");
        navigate("/");
      })
      .catch((err) => {
        console.log("Error submitting the form:", err.message);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleUpdate}>
          <h2>Update Contact</h2>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              value={values.name}
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
              value={values.phone_no}
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
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
