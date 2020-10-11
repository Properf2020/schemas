import { EntityRepository } from "mikro-orm";
import { Bill } from "../entities";

export class BillRepository extends EntityRepository<Bill> {}