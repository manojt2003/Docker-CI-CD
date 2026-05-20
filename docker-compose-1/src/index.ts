import express from "express"

let app = express()

import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

app.post("/", (req, res) => {
    let sUser = prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    res.json({"message": "signin successfully "})

})

app.get("/", (req, res) => {
    let lUser = prisma.user.findMany([])
    
    res.json({lUser})
})

app.listen(3000)