import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { UpdateAccountAsyncCommand } from '../Command/Async/UpdateAccountCommand';
import { later } from '../Utils/later';

@CommandHandler(UpdateAccountAsyncCommand)
export class UpdateAccountAsyncCommandHandler
  implements ICommandHandler<UpdateAccountAsyncCommand>
{
  async execute() {
    Logger.debug(
      'Handling Command asynchronously from UpdateAccountCommandHandler',
    );
    await later(5000);
    Logger.debug('UpdateAccountCommand has being handled asynchronously');
  }
}
