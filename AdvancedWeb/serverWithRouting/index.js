const express = require("express")
const tty = require("node:tty");
const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    res.send("I am home!")
})

app.get("/about", (req, res) => {
    res.send("I am about!")
})

app.get("/contact", (req, res) => {
    res.send("I am contact!")
})

app.get("/fruit/:doge", (req, res) => {
    console.log(req.params.doge)
    res.end(`I am the ${req.params.doge} page!`)
})

app.get("/name/:name/bank/:money", (req, res) => {
    const {name, money} = req.params
    // if (isNaN(money)) res.end("error")
    // res.send(`My name is ${req.params.name}, and I have ${req.params.money} dollars!`)
    res.send(isNaN(money) ? "error" : `My name is ${req.params.name}, and I have ${req.params.money} dollars!`)
})

app.get("/error", (req, res) => {
    res.send("That ain't a number!")
})

// catches other routes
app.get("*", (req, res) => {
    res.send("No route here!")
})

app.listen(port, console.log(`Server app running on port ${port}`))