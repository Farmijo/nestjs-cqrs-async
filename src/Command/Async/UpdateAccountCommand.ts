export class UpdateAccountAsyncCommand {
  constructor(
    public readonly commandId: string,
    public readonly entityId: string,
  ) {}
}
