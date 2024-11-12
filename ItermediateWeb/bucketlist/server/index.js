// FOUNDATION
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require("./fakedata.json")
let newId = 3
// built-in body-parser
// if json from client
app.use(express.json())
// if url-encoded
app.use(express.urlencoded({extended:true}))

// ROUTE HANDLERS
app.get("/", (req, res) => {
    res.redirect('/api/items')
})

// Read
// 1. Route - /api/items, GET method
app.get("/api/items", (req, res) => {
// 1.5. Get data from DB
// 2. JSON
// 3. Everything back
// 4. Array of objects
res.send(data)
})

// Create
// 1. Route - /api/items, GET method
app.post('/api/items', (req, res) => {
// 1.5. Get data from client
// 1.75. Database sends something back
// 2. JSON -> client

    let newItem = {
        id: ++newId,
        description: req.body.description,
        is_complete: false
    };
    let items = [...data, newItem];
    res.send(items)
})

// LISTENER
app.listen(port, console.log(`BucketList server on port ${port}`))






// 3. Send back one thing
// 4. One object - DATA, receipt from database