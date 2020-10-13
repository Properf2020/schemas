import { EntityRepository } from "@mikro-orm/core";
import { Group } from "../entities";

export class GroupRepository extends EntityRepository<Group> { }