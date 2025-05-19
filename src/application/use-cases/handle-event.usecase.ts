import { Injectable } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';

@Injectable()
export class HandleEventUseCase {
  constructor(private readonly eventRouter: IEventRouter) {}

  async execute(type: string, payload: any): Promise<void> {
    await this.eventRouter.route({ type, payload });
  }
}