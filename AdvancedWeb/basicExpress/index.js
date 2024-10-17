// foundation
// import in Node "require"
const express = require("express")
const app = express()
//console.log(process)
// if hosting site, else use 3000
const port = process.env.PORT || 3000

// route handlers
app.get("/",(req, res) => {
    //console.log(req)
    //res.end("I am from the backend!!")
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.send("I am from the redirect!")
})

// listeners
app.listen(port, console.log(`Basic Server app running on port ${port}`))