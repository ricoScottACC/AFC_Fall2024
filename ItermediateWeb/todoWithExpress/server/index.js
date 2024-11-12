require("dotenv").config()

// FOUNDATION
// where is all my stuff coming from?
// what do i need to run my server?
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// if deployed do not run a logger
if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
    const logger = require("morgan")
    app.use(logger("dev"))
}

const logger = require("morgan")
app.use(logger("dev"))
//body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// when working with a database you need to know three things:
//CONNECTION

const conn = require("./connections/pgconnection")

//BLUEPRINTS
// already done by the DBA


//QUERIES

// ROUTE HANDLERS
// when we go to a certain route, what happens?
app.get("/", (req, res) => {
    res.send("server running")
})

//CRUD
//READ
app.get("/api/todos", (req, res) => {
    let query = `select * from todo;`

    conn.query(query)
        .then(data => res.status(200).json(data.rows))
        .catch(err => {
            console.log("Error reading data from database: ", err)
            res.status(400).json({message: "it broke"})
        })
})

//CREATE

app.post("/api/todos", (req, res) => {
    let query = `insert into todo (note, is_completed) values ('${req.body.note}', false) returning *;`
    conn.query(query)
        .then(data => res.status(200).json(data.rows[0]))
        .catch(err => {
            console.log("Error reading data from database: ", err)
            res.status(400).json({message: "no creaty"})
        })
})

// LISTENER
app.listen(port, console.log(`Todo App with Express on port ${port}`))