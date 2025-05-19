import { Injectable } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from 'src/domain/enumerators/event-type.enum';

@Injectable()
export class HandleEventUseCase {
  constructor(private readonly eventRouter: IEventRouter) {}

  async execute(type: EEventType, payload: any): Promise<void> {
    await this.eventRouter.route({ type, payload });
  }
}
