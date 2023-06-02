import { Controller, Get, Logger } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { UpdateAccountCommand } from './Command/Sync/UpdateAccountCommand';
import { AccountUpdateRequested } from './Events/RequestedActions/UpdateAccountRequested.event';

@Controller()
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    private eventBus: EventBus,
  ) {}

  @Get('/sync/update')
  triggerCommandSync(): any {
    Logger.log('Request /sync/update started');
    this.commandBus.execute(
      new UpdateAccountCommand('entityId', 'entityIdentifier'),
    );
    Logger.log('Request /sync/update finished');
  }

  @Get('/async/update')
  triggerCommandAsync(): any {
    Logger.log('Request /async/update started');
    this.eventBus.publish(
      new AccountUpdateRequested({ commandId: 'id', entityId: 'id' }),
    );
    Logger.log('Request /async/update finished');
  }
}
