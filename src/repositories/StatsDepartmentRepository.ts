import { EntityRepository } from "mikro-orm";
import { StatsDepartment } from "../entities";

export class StatsDepartmentRepository extends EntityRepository<StatsDepartment> {}