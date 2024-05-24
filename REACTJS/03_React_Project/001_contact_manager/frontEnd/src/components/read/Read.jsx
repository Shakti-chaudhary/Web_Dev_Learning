import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [contact, setContact] = useState([]);

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
          setContact(data[0]);
        } else {
          console.log("No data found");
        }
      })
      .catch((err) =>
        console.error("Error in catch block of read fetch:", err)
      );
  }, []);

  return (
    <div>
      <div>
        <h2>Contact Detail</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PHONE NO</th>
              <th>EMAIL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.phone_no}</td>
              <td>{contact.email}</td>
              <td>
                <Link to="/">Back</Link>
                <Link to={`/edit/${contact.id}`}>Edit</Link>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
