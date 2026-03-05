import express from "express"
import cors from "cors"
import readJson from "./db.js"

const app = express()
app.use(express.json())
app.use(cors())


app.get("/getdata", (req,res) => {
    try {
        res.json({ data: readJson() })
    } catch (err) {
        console.error("error in server")
    }
})


app.listen(3000, () =>{
    console.log("server running http://127.0.0.1:3000");
})