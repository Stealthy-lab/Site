const express = require('express');
const path = require('path');
const app = express();

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
