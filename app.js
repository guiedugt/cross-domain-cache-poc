const express = require("express")
const subdomain = require("express-subdomain")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "/public/main.html"))
})

router.get("/sub", (_req, res) => {
    res.sendFile(path.join(__dirname, "/public/sub.html"))
})

app.use(express.static('public'))

app.use(subdomain("sub", router))
app.use("/", router)

app.listen(80, () => console.log("Server is listening ..."))