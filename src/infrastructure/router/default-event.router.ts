import { Injectable, Logger } from '@nestjs/common';
import { IEventRouter } from '../../domain/interfaces/event-router.interface';
import { EEventType } from '../../domain/enumerators/event-type.enum';

@Injectable()
export class DefaultEventRouter implements IEventRouter {
  private readonly logger = new Logger(DefaultEventRouter.name);

  async route(event: { type: EEventType; payload: any }): Promise<void> {
    console.log('-----------------------------------------------------------');
    console.log(`Roteando evento do tipo ${event.type}`);
    console.log(`Descrição: '${event.payload.description ?? 'Sem descrição'}'`);
    console.log('-----------------------------------------------------------');

    const prefix = `[${new Date().toLocaleString('pt-BR')}] >>`;
    switch (event.type) {
      case EEventType.HEALT_CHECK:
        console.log(`${prefix} Health Check`);
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.PAYMENT:
        console.log(`${prefix} Payment`);
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.DISCORD:
        console.log(`${prefix} Discord`);
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      case EEventType.LANDING_PAGE:
        console.log(`${prefix} Landing Page`);
        // TODO: Implementar lógica de fila em memória ou redis
        break;

      default:
        this.logger.warn(`Tipo de evento desconhecido: ${event.type}`);
    }
  }
}
