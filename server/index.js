const express = require("express")
const cors = require("cors")
const app = express()

const pool = require("./db")

// middleware
app.use(cors())
app.use(express.json())

// routes
app.get("/users", async (req, res) => {
    try {
        const { name } = req.query;
        const { rows: users } = await pool.query("SELECT * FROM users WHERE CONCAT(first_name,' ',last_name) ILIKE $1", [`%${name}%`])

        return res.json(users[0]);
    }
    catch (err) {
        console.error(err.message)
    }
})

// params - http://localhost:5000/:id
// query parameters - http://localhost:5000/?name=charchil

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})