export class DelayedEvent {
  constructor(public readonly id: string) {}
}

export class AccountUpdatedEvent extends DelayedEvent {
  constructor(public readonly id: string) {
    super(id);
  }
}
export class AccountFlushedEvent extends DelayedEvent {
  constructor(public readonly id: string) {
    super(id);
  }
}
