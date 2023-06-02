export class AccountUpdateRequested {
  constructor(public readonly dto: AccountUpdateDTO) {}
}

type AccountUpdateDTO = { commandId: string; entityId: string };
