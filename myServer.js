const express = require ("express")
const formidable = require("formidable")
const app = express()
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Rentals.html")
})
app.post("/", (req, res) => {
    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        res.write("File uploaded")
        res.end()
    })
    form.on("fileBegin", (name, file) => {
        file.path = __dirname + "/Uploads/" + file.name
    })
    form.on("file", (name, file) => {
        console.log("Uploaded file: " + file.name)
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})