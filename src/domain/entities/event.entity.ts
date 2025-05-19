export class Event {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly payload: Record<string, any>,
    public readonly timestamp: Date,
  ) {}
}
