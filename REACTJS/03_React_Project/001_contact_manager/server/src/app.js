import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shakti@root3306",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  const sql = "select * from contact_m";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred on the server" });
    }
    // Check if the result is an empty array
    if (result.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }
    return res.json(result);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "select * from contact_m where id = ?";
  let id = req.params.id;
  id = parseInt(id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Contact not found:?" });
    }
    // Check if the result is an empty array
    if (result.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }
    return res.json(result);
  });
});

app.post("/contact", (req, res) => {
  const { name, email, phone_no } = req.body;

  if (!name || !email || !phone_no) {
    return res.status(400).json({
      error:
        "Invalid request body any of name,email,phoneNo is having no input",
    });
  }

  const getMaxId = "select max(id) as max_id from contact_m";
  db.query(getMaxId, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "An error occurred on the server with database query" });
    }

    // Check if the result is an empty array
    if (result.length === 0) {
      return res.status(404).json({ error: "No data found" });
    }

    const maxId = result[0].max_id || 0;
    const newId = maxId + 1;

    const insertQuery =
      "insert into contact_m (id,name,phone_no,email) values (?,?,?,?)";
    const values = [newId, name, phone_no, email];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "An error ocuured on the server" });
      }

      const insertData = { id: newId, name, phone_no, email };
      res.status(201).json(insertData);
    });
  });
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "update contact_m set `name`=?,`phone_no`=?,`email`=? where id =?";
  const { name, phone_no, email } = req.body;
  const values = [name, phone_no, email, id];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "err on update data to mysql server" });
    }
    return res.json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "delete from contact_m where id = ?";
  let id = req.params.id;
  id = parseInt(id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error to delete contact: " });
    }
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081 in app.js file");
});
