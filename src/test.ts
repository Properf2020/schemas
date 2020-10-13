import { Bill, Club, Swimmer } from './entities';
import { EPaymentStatus } from './enums';
import { createConnection } from './index'

const createBill = (price: number, club: Club, paymentStatus: EPaymentStatus): Bill => {
    return new Bill(new Date(), new Date(), price, club, paymentStatus);
}

const createClub = (name: string, idffn: number): Club => {
    return new Club(name, idffn);
}

const createSwimmer = (firstName: string, lastName: string, birthDate: Date, club: Club, sex: string): Swimmer => {
    return new Swimmer(firstName, lastName, birthDate, club, sex);
}

(async () => {
    const DI = await createConnection({
        mongoHost: "mongodb://srv1.poneyhost.eu:27017",
        mongoName: "properf-test"
    });

    const em = DI.em.fork();

    const club1 = createClub("Mon club de ouf", 1);
    const club2 = createClub("Mon club nul", 2);
    const bill = createBill(1500, club1, EPaymentStatus.PENDING);
    let swimmer = createSwimmer(
        "Test",
        "John",
        new Date(),
        club1,
        "H"
    );
    swimmer.idFFn = "1";

    em.persistAndFlush([club1, club2, bill, swimmer]);

    const retrieved = await em.getRepository<Club>(Club).findOne({ idFfn: 1 }, ['bills'])
    if (retrieved == undefined)
        throw new Error("Aucunes bills de save c'est bizarre");

    const bills: Bill[] = retrieved.bills.getItems();
    console.log("On nous doit encore " + bills
        .filter(bill => bill.paymentStatus == EPaymentStatus.PENDING)
        .map(bill => bill.price)
        .reduce((prev, bill) => prev + bill) + " $")
})();