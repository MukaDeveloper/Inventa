import { Injectable, Logger } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from 'src/domain/enumerators/event-type.enum';

@Injectable()
export class DefaultEventRouter implements IEventRouter {
  private readonly logger = new Logger(DefaultEventRouter.name);

  async route(event: { type: EEventType; payload: any }): Promise<void> {
    this.logger.log(`Roteando evento do tipo ${event.type}`);

    switch (event.type) {
      case EEventType.HEALT_CHECK:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.PAYMENT:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.DISCORD:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.LANDING_PAGE:
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      default:
        this.logger.warn(`Tipo de evento desconhecido: ${event.type}`);
    }
  }
}
