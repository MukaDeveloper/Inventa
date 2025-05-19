import { EEventType } from "../enumerators/event-type.enum";

export class Event {
  constructor(
    public readonly id: string,
    public readonly type: EEventType,
    public readonly payload: Record<string, any>,
    public readonly timestamp: Date,
  ) {}
}
