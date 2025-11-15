import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/coder_dabe2';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ MongoDB conectado');
        app.listen(PORT, () => console.log(`🚀 Servidor escuchando en el puerto ${PORT}`));
    })
    .catch(err => {
        console.error('Error de conexiòn con MongoDB:', err);
        process.exit(1);
    })
;