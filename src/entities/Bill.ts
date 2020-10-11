import { Entity, Property } from '@mikro-orm/core';
import { Enum } from 'mikro-orm';
import { BaseEntity, Club } from '.';
import { EPaymentStatus } from '../enums';
import { BillRepository } from '../repositories/BillRepository';

@Entity({ customRepository: () => BillRepository})
export class Bill extends BaseEntity {

  @Property()
  club: Club;

  @Property()
  from: Date;

  @Property()
  to: Date;

  @Property()
  price: number;

  @Enum()
  paymentStatus: EPaymentStatus;

  constructor(from: Date, to: Date, price: number, club: Club, paymentStatus: EPaymentStatus) {
    super();
    this.from = from;
    this.to = to;
    this.price = price;
    this.club = club;
    this.paymentStatus = paymentStatus;
  }
}
