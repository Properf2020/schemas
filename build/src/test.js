"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const enums_1 = require("./enums");
const index_1 = require("./index");
const createBill = (price, club, paymentStatus) => {
    return new entities_1.Bill(new Date(), new Date(), price, club, paymentStatus);
};
const createClub = (name, idffn) => {
    return new entities_1.Club(name, idffn);
};
const createSwimmer = (firstName, lastName, birthDate, club, sex) => {
    return new entities_1.Swimmer(firstName, lastName, birthDate, club, sex);
};
(async () => {
    const DI = await index_1.createConnection({
        mongoHost: "mongodb://srv1.poneyhost.eu:27017",
        mongoName: "properf-test"
    });
    const em = DI.em.fork();
    const club1 = createClub("Mon club de ouf", 1);
    const club2 = createClub("Mon club nul", 2);
    const bill = createBill(1500, club1, enums_1.EPaymentStatus.PENDING);
    let swimmer = createSwimmer("Test", "John", new Date(), club1, "H");
    swimmer.idFFn = "1";
    em.persistAndFlush([club1, club2, bill, swimmer]);
    const retrieved = await em.getRepository(entities_1.Club).findOne({ idFfn: 1 }, ['bills']);
    if (retrieved == undefined)
        throw new Error("Aucunes bills de save c'est bizarre");
    const bills = retrieved.bills.getItems();
    console.log("On nous doit encore " + bills
        .filter(bill => bill.paymentStatus == enums_1.EPaymentStatus.PENDING)
        .map(bill => bill.price)
        .reduce((prev, bill) => prev + bill) + " $");
})();
