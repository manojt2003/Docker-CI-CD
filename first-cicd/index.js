import express from "express"

let app = express()

app.get("/", (req, res) => {
    res.send("Your connected asdf ")
})

app.listen(3000)