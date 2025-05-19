import { Injectable, Logger } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';

@Injectable()
export class DefaultEventRouter implements IEventRouter {
  private readonly logger = new Logger(DefaultEventRouter.name);

  async route(event: { type: string; payload: any }): Promise<void> {
    this.logger.log(`Roteando evento do tipo ${event.type}`);

    switch (event.type) {
      case 'healthcheck':
        // Chamar o caso de uso correspondente
        break;

      case 'order.placed':
        // Chamar outro caso de uso
        break;

      default:
        this.logger.warn(`Tipo de evento desconhecido: ${event.type}`);
    }
  }
}
