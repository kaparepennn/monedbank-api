const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        res.json({ message: "Registro funcionando" })
    } catch (error) {
        res.status(500).json({ message: "Error en registro" })
    }
}

exports.login = async (req, res) => {
    try {
        res.json({ message: "Login funcionando" })
    } catch (error) {
        res.status(500).json({ message: "Error en login" })
    }
}