const mongoose = require('mongoose');
const fs = require("fs");

module.exports.createConnection = (host, database) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://' + host + ':27017/' + database, { useNewUrlParser: true, useUnifiedTopology: true });

        fs.readdirSync(__dirname + "/schemas").forEach((file) => {
            if (file == "index.js") return;
            let model = require(__dirname + "/schemas/" + file);
            console.log("Loaded model " + file);
        });

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