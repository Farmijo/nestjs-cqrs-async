export class UpdateAccountCommand {
  constructor(
    public readonly commandId: string,
    public readonly entityId: string,
  ) {}
}
