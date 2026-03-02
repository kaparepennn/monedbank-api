const Auction = require("../models/Auction")
const User = require("../models/User")

// Funcion para crear una subasta
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


// Funcion para realizar una puja
exports.placeBid = async (req, res) => {
    try {

        const auction = await Auction.findById(req.body.auctionId)

        if(!auction){
            return res.status(404).json({ message: "Subasta no encontrada" })
        }

        if(req.body.amount > auction.currentPrice){

            auction.currentPrice = req.body.amount

            await auction.save()

            res.json({ message: "Oferta realizada correctamente", newPrice: auction.currentPrice })

        } else {

            res.status(400).json({ message: "La oferta debe ser mayor a la actual" })

        }

    } catch (error) {
        res.status(500).json({ message: "Error al ofertar" })
    }
}