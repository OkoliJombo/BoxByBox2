const express = require ("express")
const formidable = require("formidable")
const app = express()
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/rentals.html")
})
app.post("/", (req, res) => {
    const form = new formidable.IncomingForm()
    form.parse(req)

    form.on("fileBegin", (name, file) => {
        file.path = __dirname + "/Uploads/" + file.name
    })
    form.on("file", (name, file) => {
        console.log("Uploaded " + file.name)
        res.send("File uploaded successfully")
        res.sendFile(__dirname + "/Rentals.html")
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})