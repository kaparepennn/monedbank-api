const express = require("express")
const router = express.Router()
const auctionController = require("../controllers/auctionController")

router.post("/create", auctionController.createAuction)
router.post("/bid", auctionController.placeBid)

module.exports = router