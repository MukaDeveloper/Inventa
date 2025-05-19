import { EEventType } from '../enumerators/event-type.enum';

export interface ReceiveEventDTO {
  type: EEventType;
  payload: any;
}
