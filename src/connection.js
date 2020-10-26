const mongoose = require('mongoose');

module.exports.createConnection = (host, database) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://' + host + ':27017/' + database, { useNewUrlParser: true, useUnifiedTopology: true });

        var db = mongoose.connection;
        db.on('error', function (err) {
            console.log(err.message);
            reject();
        });

        db.once('open', function () {
            console.log("Connexion à la base OK");
            resolve();
        });
    })
}