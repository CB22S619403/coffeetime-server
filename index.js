console.log("hello from server")
const express = require('express')
const PORT =5000;
const app = express();
app.use(express.json()) //parse json
app.get("/", (req, res) => {
    res.send("WELCOME SOWNTHARYA")
})
app.listen(PORT, ()=> {
     console.log(`success, running in http://localhost:${PORT}`)

})



