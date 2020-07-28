const pagseguro = require('../src')
const config = require('./config')

const client = pagseguro.connect(config)

// console.log("pagseguro_" + pagseguro)
// console.log("pagseguro.connect_" + pagseguro.connect)
// console.log("config_" + config)
// console.log("client_" + client)

client.session.get()
    .then(data => console.log(data))
    .catch(error => console.error(error))
