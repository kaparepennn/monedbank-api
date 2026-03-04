const express = require("express")
const router = express.Router()

const transactionController = require("../controllers/transactionController")

//Ruta para realizar una transferencia entre usuarios
router.post("/transfer", transactionController.transfer)

module.exports = router