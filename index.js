const express = require("express")
var bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const contentRoutes = require("./routes/contentRoute")
const reportRoutes = require("./routes/reportRoute")
const adminRoutes = require("./routes/adminRoute")
const userRoutes = require("./routes/userRoute")
const documentRoutes = require("./routes/documentRoute")
const path = require("path");
// const swaggerUI = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger-jsdoc");

const connectDB = require("./config/db")

const app = express()
connectDB()
const port =  process.env.PORT || 4080

app.use(bodyParser.urlencoded({limit:'1mb',extended: true}))
app.use(bodyParser.json({limit:'1mb'}))

app.use("/api", contentRoutes,documentRoutes,reportRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/users", userRoutes)
// app.use('/docs', express.static('./docs'));
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.static(path.join(__dirname,'/public')));




app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})

module.exports={
    app
}

