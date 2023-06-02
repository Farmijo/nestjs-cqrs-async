import { Logger } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import {
  AccountUpdatedEvent,
  AccountFlushedEvent,
} from '../Events/Account/Events';

export class Account extends AggregateRoot {
  constructor(private id: string) {
    super();
  }
  update() {
    Logger.debug('Publishing AccountUpdatedEvent through AccountModel');
    return this.apply(new AccountUpdatedEvent(this.id));
  }
  flush() {
    Logger.debug('Publishing AccountFlushedEvent through AccountModel');
    return this.apply(new AccountFlushedEvent(this.id));
  }
}
