import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [complaints, setComplaints] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api/complaints")
      .then((response) => response.json())
      .then((data) => setComplaints(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      fetch("/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          console.log(data.message);
          setComplaints([...complaints, { text }]);
          setText("");
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div className="container mt-5">
      <h1>Complaint Management System</h1>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your complaint"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">
        <h2>Complaints</h2>
        <ul className="list-group">
          {complaints.map((complaint, index) => (
            <li key={index} className="list-group-item">
              {complaint.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
