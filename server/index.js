const express = require("express")
const cors = require("cors")
const app = express()

const pool = require("pool")

// middleware
app.use(cors())
app.use(express.json())

// routes


app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})