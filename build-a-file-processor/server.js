const fs = require('fs');
const path = require('path');

// Asegurar que la carpeta assets exista para evitar errores
if (!fs.existsSync('assets')) {
  fs.mkdirSync('assets');
}

// 1. Crear el readable stream (origen del poema) y el writable stream (destino)
const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);

// Mensaje opcional en consola para confirmar la ejecución
console.log('Streaming del poema completado.');
