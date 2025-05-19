import { ReceiveEventDTO } from '../models/receive-event.dto';

export interface IEventRouter {
  route(event: ReceiveEventDTO): Promise<void>;
}
