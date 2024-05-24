import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
        console.log("Deletion of contact success:");
        setData((prevdata) => prevdata.filter((contact) => contact.id !== id));
      })
      .catch((err) => {
        console.log("Deletion of contact unsuccess:  ", err.message);
      });
  };
  return (
    <div>
      <div>
        <h2>Contact List</h2>
        <div className="create_btn">
          <Link to="/create" className="btn btn-create">
            Create +
          </Link>
        </div>
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
            {data.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.phone_no}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Link to={`/read/${contact.id}`}>Read</Link>
                    <Link to={`/edit/${contact.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
