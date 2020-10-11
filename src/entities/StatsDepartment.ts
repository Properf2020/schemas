import { Entity } from "mikro-orm";
import { BaseStats } from ".";
import { StatsDepartmentRepository } from "../repositories/StatsDepartmentRepository";

@Entity({ customRepository: () => StatsDepartmentRepository})
export class StatsDepartment extends BaseStats {}