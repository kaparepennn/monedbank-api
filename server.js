const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/database")

const app = require("express")

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/transactions", require("./routes/transactionRoutes"))
app.use("/api/auctions", require("./routes/auctionRoutes"))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en puerto " + PORT)
})