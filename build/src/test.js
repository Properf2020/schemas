"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const index_1 = require("./index");
const createBill = (price, club, paymentStatus) => {
    return new entities_1.Bill(new Date(), new Date(), price, club, paymentStatus);
};
const createClub = (name, idffn, region, departement) => {
    return new entities_1.Club(name, idffn, departement, region);
};
const createSwimmer = (firstName, lastName, birthDate, sex) => {
    return new entities_1.Swimmer(firstName, lastName, birthDate, sex);
};
(async () => {
    const DI = await index_1.createConnection({
        mongoHost: "mongodb://srv1.poneyhost.eu:27017",
        mongoName: "properf-test"
    });
    const em = DI.em.fork();
    const swimmer = await em
        .getRepository(entities_1.Swimmer)
        .findOne({ id: '5f8b08bbec8f046593a11669' }, ['clubs']);
    if (!swimmer)
        throw new Error();
    const course = await em.getRepository(entities_1.CourseFormated).findOne({ id: "5f8b08d833c5bb669af6a0b3" });
    if (!course)
        throw new Error();
    console.log(swimmer);
})();
