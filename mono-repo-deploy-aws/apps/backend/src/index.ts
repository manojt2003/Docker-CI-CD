import express from "express"
import {prisma} from "@repo/db"

let app = express()
let port = 3003

app.use(express.json())

app.post("/users", (req, res) => {
    let {username, password} = req.body || {}

    if(!username || !password) {
        return res.json({"message": "Required a username and password"})
    } 
    prisma.user.create({
        data: {
            username,
            password        
        }
    })
    res.json({
        "message": "successfully signup"
    })
})

app.get("/users", (req, res) => {
    let lUser = prisma.user.findMany()

    res.json({lUser})
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); 
})