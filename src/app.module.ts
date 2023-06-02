import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateAccountCommandHandler } from './CommandHandler/dispatchUpdate.handler';
import { AccountUpdatedHandler } from './EventHandler/account-updated.handler';
import { AccountSagas } from './Sagas/accountUpdated.saga';
import { UpdateAccountAsyncCommandHandler } from './CommandHandler/UpdateAccountAsync.handler';

const CommandHandlers = [
  UpdateAccountCommandHandler,
  UpdateAccountAsyncCommandHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [...CommandHandlers, AccountUpdatedHandler, AccountSagas],
})
export class AppModule {}
