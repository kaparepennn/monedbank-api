const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Base de datos conectada correctamente")
})
.catch((error) => {
    console.log("Error al conectar base de datos", error)
})

app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/transactions", require("./routes/transactionRoutes"))
app.use("/api/auctions", require("./routes/auctionRoutes"))

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000")
})