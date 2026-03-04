const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Base de datos conectada correctamente")
    } catch (error) {
        console.log("Error al conectar base de datos", error)
        process.exit(1)
    }
}

module.exports = connectDB