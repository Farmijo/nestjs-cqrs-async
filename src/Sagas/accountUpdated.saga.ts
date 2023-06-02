import { Injectable, Logger } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { UpdateAccountAsyncCommand } from '../Command/Async/UpdateAccountCommand';
import { AccountUpdateRequested } from '../Events/RequestedActions/UpdateAccountRequested.event';

@Injectable()
export class AccountSagas {
  @Saga()
  accountUpdateRequested = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(AccountUpdateRequested),
      map((event: AccountUpdateRequested) => {
        Logger.debug('Reacting to AccountUpdateRequested from saga');
        return new UpdateAccountAsyncCommand(
          event.dto.commandId,
          event.dto.entityId,
        );
      }),
    );
  };
}
