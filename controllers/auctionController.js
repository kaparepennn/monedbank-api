const Auction = require("../models/Auction")

exports.createAuction = async (req, res) => {
    try {
        const auction = new Auction(req.body)
        await auction.save()
        res.json({ message: "Subasta creada correctamente" })
    } catch (error) {
        res.status(500).json({ message: "Error al crear subasta" })
    }
}

exports.placeBid = async (req, res) => {
    try {
        const auction = await Auction.findById(req.body.auctionId)

        if (req.body.amount > auction.currentPrice) {
            auction.currentPrice = req.body.amount
            await auction.save()

            res.json({ message: "Oferta realizada correctamente" })
        } else {
            res.status(400).json({ message: "La oferta debe ser mayor a la actual" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al ofertar" })
    }
}