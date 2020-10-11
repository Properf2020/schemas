import { EntityRepository } from "mikro-orm";
import { Group } from "../entities";

export class GroupRepository extends EntityRepository<Group> {}