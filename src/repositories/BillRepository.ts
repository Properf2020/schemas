import { EntityRepository } from "@mikro-orm/core";
import { Bill } from "../entities";

export class BillRepository extends EntityRepository<Bill> { }