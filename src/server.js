import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ ERROR: La variable MONGO_URI no está definida en .env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, { dbName: "ecommerce" })
  .then(() => {
    console.log("✅ MongoDB conectado con éxito");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error de conexión en MongoDB:", err);
    process.exit(1);
  });
