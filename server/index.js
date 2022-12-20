const express = require("express")
const cors = require("cors")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// routes


app.listen(5000, () => {
    console.log("Sercer is listening on port 5000");
})