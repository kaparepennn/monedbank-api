const Auction = require("../models/Auction")

exports.createAuction = async (req, res) => {
    try {
        const auction = new Auction({
            title: req.body.title,
            description: req.body.description,
            initialPrice: req.body.initialPrice,
            currentPrice: req.body.initialPrice,
            endDate: req.body.endDate,
            createdBy: req.body.userId
        })

        await auction.save()

        res.json({ message: "Subasta creada correctamente", auction })
    } catch (error) {
        res.status(500).json({ message: "Error al crear subasta" })
    }
}