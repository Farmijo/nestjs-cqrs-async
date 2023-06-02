import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Account } from '../AgregateRoot/Account.model';
import { UpdateAccountCommand } from '../Command/Sync/UpdateAccountCommand';
import { Logger } from '@nestjs/common';

@CommandHandler(UpdateAccountCommand)
export class UpdateAccountCommandHandler
  implements ICommandHandler<UpdateAccountCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: UpdateAccountCommand) {
    const { entityId } = command;
    Logger.debug('Handling Command from UpdateAccountCommandHandler');
    const AccountModel = this.publisher.mergeClassContext(Account);
    const account = new AccountModel(entityId);
    account.update();
    account.flush();
    account.commit();
    Logger.debug('UpdateAccountCommand has being handled synchronously');
  }
}
