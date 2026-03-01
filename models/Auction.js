const mongoose = require("mongoose")

const AuctionSchema = new mongoose.Schema({
    title: String,
    description: String,
    initialPrice: Number,
    currentPrice: Number,
    endDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Auction", AuctionSchema)