import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { AccountUpdatedEvent } from '../Events/Account/Events';
import { later } from '../Utils/later';

@EventsHandler(AccountUpdatedEvent)
export class AccountUpdatedHandler
  implements IEventHandler<AccountUpdatedEvent>
{
  async handle() {
    Logger.debug(
      'Handling AccountUpdatedEvent from AccountUpdatedEventHandler',
    );
    await later(5000);
    Logger.debug('AccountUpdatedEvent handling finished');
  }
}
