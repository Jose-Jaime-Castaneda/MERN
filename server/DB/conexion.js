const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmern');

const objectDB = mongoose.connection

objectDB.on('connected', () => { console.log('Conexión correcta a MongoDB'); })
objectDB.on('error', () => { console.log('Error al conectar a MongoDB'); })

module.exports = mongoose