const Transaction = require("../models/Transaction")
const User = require("../models/User")

exports.transfer = async (req, res) => {
    try {
        const { senderId, receiverId, amount } = req.body

        const sender = await User.findById(senderId)
        const receiver = await User.findById(receiverId)

        if (sender.balance < amount) {
            return res.status(400).json({ message: "Fondos insuficientes" })
        }

        sender.balance -= amount
        receiver.balance += amount

        await sender.save()
        await receiver.save()

        const transaction = new Transaction({
            sender: senderId,
            receiver: receiverId,
            amount
        })

        await transaction.save()

        res.json({ message: "Transferencia realizada correctamente" })
    } catch (error) {
        res.status(500).json({ message: "Error en transferencia" })
    }
}