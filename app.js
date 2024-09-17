const express = require('express');
const path = require('path');
const cors = require('cors'); // Asegúrate de instalar cors con npm install cors
const app = express();

// Configuración de CORS
app.use(cors({
    origin: '*', // Permitir todas las solicitudes de origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));

// Servir archivos estáticos en la carpeta actual
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Servir el archivo HTML
});

// Ruta para capturar los datos
app.post('/capturar', express.json(), (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos:', datos);
    res.send('Datos recibidos'); // Enviar una respuesta
});

// Puerto del servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
