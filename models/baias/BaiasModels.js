const db = require('../../config/dbConnect');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

    console.log('conexão feita com sucesso');

})

module.exports = BaiasModels;